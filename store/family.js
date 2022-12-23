export const state = () => ({
    family: {},
    members: [],
    restrictions: [],
});

export const mutations = {
    setFamily(state, payload) {
        state.family = payload.family;
        state.members = payload.members;
        state.restrictions = payload.restrictions;
    },
    // commitMember(state, payload) {
    //   state.members.push({
    //     name: payload.member.name
    //   });
    // },
    // commitRestriction(state, payload) {
    //   if (!restrictionExists(payload.restriction)) {
    //     state.restrictions.push(payload.restriction);
    //   }
    // }
};

export const actions = {
    async loadFamily(context, familyId) {
        let { data } = await this.$axios.get(`/family/${familyId}`);
        context.commit('setFamily', {
            family: data.family,
            members: data.members,
            restrictions: data.restrictions,
        });
    },
    async refreshFamily(context) {
        context.dispatch('loadFamily', context.state.family.id);
    },
    async addMember(context, personData) {
        await this.$axios.post('/person', {
            familyId: personData.familyId,
            firstName: personData.firstName,
            lastName: personData.lastName,
        });
        context.dispatch('refreshFamily');
    },
    async removeMember(context, personId) {
        await this.$axios.delete(`/person/${personId}`);
        context.dispatch('refreshFamily');
    },
    async addRestriction(context, restrictionData) {
        await this.$axios.post('/restriction', {
            familyId: restrictionData.familyId,
            giverId: restrictionData.giverId,
            receiverId: restrictionData.receiverId,
        });
        context.dispatch('refreshFamily');
    },
}

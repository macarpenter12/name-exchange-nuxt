export const state = () => ({
    family: {},
    familyMembers: [],
    restrictions: [],
});

export const getters = {
    family: (state) => state.family,
    familyMembers: (state) => state.familyMembers,
    restrictions: (state) => state.restrictions,
};

export const mutations = {
    setFamily(state, payload) {
        state.family = payload.family;
        state.familyMembers = payload.familyMembers;
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
            familyMembers: data.members,
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
            familyId: context.state.family.id,
            giverId: restrictionData.restriction.giverId,
            receiverId: restrictionData.restriction.receiverId,
        });
        context.dispatch('refreshFamily');
    },
    async deleteRestriction(context, restrictionData) {
        await this.$axios.delete('/restriction', {
            data: {
                giverId: restrictionData.restriction.giverId,
                receiverId: restrictionData.restriction.receiverId,
            }
        });
        context.dispatch('refreshFamily');
    },
}

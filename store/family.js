export const state = () => ({
  family: {},
  members: [],
});

export const mutations = {
  setFamily(state, payload) {
    state.family = payload.family;
    state.members = payload.members;
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
    this.$axios.get(`/family/${familyId}`).then(({ data }) => {
      context.commit('setFamily', {
        family: data.family,
        members: data.members,
      });
    });
  },
  async refreshFamily(context) {
    context.dispatch('loadFamily', context.state.family.id);
  },
  async addMember(context, personData) {
    await this.$axios.post(`/person`, {
      familyId: personData.familyId,
      firstName: personData.firstName,
      lastName: personData.lastName,
    });
    context.dispatch('refreshFamily');
  },
  async removeMember(context, personId) {
    this.$axios.delete(`/person/${personId}`)
      .then(() => context.dispatch('refreshFamily'));
  }
  // addRestriction(context, payload) {
  //   if (payload.restriction.giver.length < 1 || payload.restriction.recipient.length < 1) {
  //     alert('Please enter both a giver and a recipient to add a restriction.');
  //     return;
  //   }
  //   context.commit('commitRestriction', payload);
  // },
}

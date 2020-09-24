export const state = () => ({
  name: 'test',
  members: [
    { name: 'johnny' },
    { name: 'susan' },
    { name: 'mary' }
  ],
  restrictions: []
});

export const mutations = {
  setFamily(state, payload) {
    state.family = payload.family;
  },
  commitMember(state, payload) {
    state.members.push({
      name: payload.member.name
    });
  },
  commitRestriction(state, payload) {
    for (let i = 0; i < state.restrictions.length; i++) {
      if (state.restrictions[i].giver === payload.restriction.giver &&
          state.restrictions[i].recipient === payload.restriction.recipient) {
        return;
      }
    }

    state.restrictions.push(payload.restriction);
  }
};

export const actions = {
  addMember(context, payload) {
    context.commit('commitMember', payload);
  },
  addRestriction(context, payload) {
    if (payload.restriction.giver.length < 1 || payload.restriction.recipient.length < 1) {
      alert('Please enter both a giver and a recipient to add a restriction.');
      return;
    }
    context.commit('commitRestriction', payload);
  }
  // async loadFamily(context, payload) {
  //   let loadedFamily = await axios.get('/family/' + payload.familyName);
  //   context.commit('setFamily', { family: loadedFamily });
  // }
}
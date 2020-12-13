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
    if (!restrictionExists(payload.restriction)) {
      state.restrictions.push(payload.restriction);
    }
  }
};

export const actions = {
  addMember(context, payload) {
    context.commit('commitMember', payload);
    context.commit('commitRestriction', {
      restriction: {
        giver: payload.member.name,
        recipient: payload.member.name
      }
    })
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

function restrictionExists(newRestriction) {
  for (let i = 0; i < state.restrictions.length; i++) {
    if (state.restrictions[i].giver === newRestriction.giver &&
        state.restrictions[i].recipient === newRestriction.recipient) {
      return true;
    }
  }
  return false;
}
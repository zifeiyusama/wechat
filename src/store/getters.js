export default {
	//返回当前store中所有用户的ID集合
	userIdSet(state) {
		return Object.keys(state.allUser);
	},
	currentUser(state) {
		return state.allUser[state.currentUserId];
	}
}
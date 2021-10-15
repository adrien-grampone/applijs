const initialState = {
    data: {},
};

const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_USER":
            return {
                ...state,
                //data: action.user
                data:{
                    themes:action.themes,
                    modules:action.modules,
                    objectifs:action.objectifs,
                    user: action.user
                }
            };
            /*case "GET_MODULES":
                return {
                    ...state,
                    data:{
                        modules:action.modules,
                    }
                };*/
        /*case 'EDIT_USER':
            let userInfosToUpdate = state.user;
            userInfosToUpdate.infos[0].nom = action.user.nom
            userInfosToUpdate.infos[0].prenom = action.user.prenom
            userInfosToUpdate.infos[0].email = action.user.email
            userInfosToUpdate.infos[0].tel = action.user.tel
            userInfosToUpdate.infos[0].age = action.user.age
            userInfosToUpdate.infos[0].objectifIdr = action.user.objectifIdr
            userInfosToUpdate.infos[0].objectifIsAppartement = action.user.objectifIsAppartement
            userInfosToUpdate.infos[0].objectifBudget = action.user.objectifBudget
            userInfosToUpdate.infos[0].objectifVille = action.user.objectifVille
            userInfosToUpdate.infos[0].thumbnail = action.user.thumbnail

            return {
                ...state,
                user: userInfosToUpdate
            };*/

        case "GET_INFOS_USER":
            return {
                ...state,
                data: { ...state.user, ...action.user }
            };

        /*case "EDIT_TOKEN_USER":
            let userToken = state.user;
            //console.log(userTokenNotif);
            userToken.token = action.token;
            return {
                ...state,
                user: userToken
            };

       

        case 'EDIT_OBJECTIF':
            let userToUpdate = state.user;
            userToUpdate.infos[0].objectifs.map(
                (content, i) => {
                    if (content.id == action.objectif.id) {
                        userToUpdate.infos[0].objectifs[i] = action.objectif;
                    }
                }
            );
            return {
                ...state,
                user: userToUpdate
            };*/

        default:
            return state;
    }
}
export default countReducer;

/**
 * @description rafraichir une page
 */
Chillout.navRefresh = function (page , setUser = true) {
    if (page) {
        this.sessionPut ("page" , page);
    }
    if (setUser) {
        Chillout.modelGetUser ({
            id : this.sessionGet ('user').id ,
            success : (data) => {
                console.log ("je récupère les infos du user");
                this.sessionPut ('user' , data.data);
                window.location.href = "";
            } ,
            error : function (error) {
                console.log (error);
            }
        });
    }
    else {
        console.log ("pas de user");
        window.location.href = "";
    }
};

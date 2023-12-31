import { reqCategoryList,reqGetBannerList,reqGetFloorList} from "@/api";

const state={
    categoryList:[],
    bannerList:[],
    floorList:[],
};
const mutations={
    CATEGORYLIST(state,categoryList){
        state.categoryList=categoryList;
    },
    GETBANNERLIST(state,bannerList){
        state.bannerList=bannerList
    },
    FLOORLIST(state,floorList){
        state.floorList=floorList
    },
};
const actions={
    async categoryList({commit}){
        let result = await reqCategoryList();
        if(result.code==200){
            commit('CATEGORYLIST',result.data);
        }
    },
    async getBannerList({commit}){
        let result = await reqGetBannerList();
        if(result.code==200){
            commit('GETBANNERLIST',result.data);
        }
    },
    async getFloorList({commit}){
        let result = await reqGetFloorList();
        if(result.code==200){
            commit('FLOORLIST',result.data);
        }
    },
};
const getters={};

export default {
    namespaced:true,
    state,
    mutations,
    actions,
    getters,
}
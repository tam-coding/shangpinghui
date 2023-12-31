import {reqGetSearchInfo} from '@/api'
const state={
    searchList:{},
};
const mutations={
    SEARCHLIST(state,searchList){
        state.searchList=searchList
    }
};
const actions={
    async getSearchList({commit},params={}){
        let result=await reqGetSearchInfo(params)
        
        if(result.code==200){
        commit("SEARCHLIST",result.data)
        }
    }
};
const getters={
    goodsList(state){
        return state.searchList.goodsList||[]
    },
    attrsList(state){
        return state.searchList.attrsList||[]
    },
    trademarkList(state){
        return state.searchList.trademarkList||[]
    },
    total(state){
        return state.searchList.total||''
    },



};

export default {
    namespaced:true,
    state,
    mutations,
    actions,
    getters,
}
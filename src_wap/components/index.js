import searchBar from './searchBar.vue';
import plusOreduce from './plusOreduce.vue'
import goodsItem from './goodsItem.vue';
import goodsImg from './goodsImg.vue';
import mayLike from './mayLike.vue';
import editPrice from './editPrice';
import msgPopup from './msgPopup';

export default {
    install(Vue,option) {
        Vue.component(searchBar.name,searchBar);
        Vue.component('plusOreduce',plusOreduce);
        Vue.component(goodsImg.name,goodsImg);
        Vue.component(goodsItem.name,goodsItem);
        Vue.component(mayLike.name,mayLike);
        Vue.component(msgPopup.name,msgPopup);
        Vue.prototype.$editPrice = editPrice;
    }
}
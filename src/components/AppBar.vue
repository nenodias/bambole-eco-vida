<template>
    <div>
        <b-navbar>
            <template slot="brand">
                <b-navbar-item tag="router-link" :to="{ path: '/' }">
                    {{ constants.TITLE }}
                </b-navbar-item>
            </template>
            <template slot="start">
                <b-navbar-item href="#">
                    Início
                </b-navbar-item>
                <b-navbar-dropdown label="Produtos">
                    <b-navbar-item href="#">
                        Fraldas
                    </b-navbar-item>
                    <b-navbar-item href="#">
                        Absorventes
                    </b-navbar-item>
                </b-navbar-dropdown>
                <b-navbar-item href="#">
                    Minha conta
                </b-navbar-item>
                <b-navbar-item v-if="isMobile" tag="router-link" :to="{ path: '/pesquisar' }">
                    Pesquisar
                </b-navbar-item>
            </template>

            <template slot="end" v-if="!isMobile">
                <b-navbar-item tag="div">
                    <b-input placeholder="Pesquisar..."
                        type="search"
                        icon-pack="fa"
                        icon="search"
                        icon-clickable
                        @icon-click="searchIconClick">
                    </b-input>
                </b-navbar-item>
            </template>
        </b-navbar>
        <media-bar></media-bar>
    </div>
</template>

<script>
import LayoutMixin from '@/mixins/LayoutMixin'
import MediaBar from './MediaBar'
import constants from './../constants'

export default {
    name:'AppBar',
    components:{
        MediaBar
    },
    mixins:[LayoutMixin],
    data(){
        return {
            constants
        }
    },
    methods:{
        searchIconClick(){

        }
    }
}
</script>

<style>
.search {
    margin: 10px;
}
</style>
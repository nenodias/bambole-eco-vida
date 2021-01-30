<template>
    <b-field class="media-bar" grouped group-multiline>
        <div :class="getClass">
            <b-taglist attached>
                <a target="_BLANK" :href="constants.FACEBOOK" class="tag is-info"><i class="fa fa-facebook"></i></a>
                <a target="_BLANK" :href="constants.WHATSAPP" class="tag is-success"><i class="fa fa-whatsapp"></i></a>
                <a target="_BLANK" :href="constants.INSTAGRAM" class="tag is-danger"><i class="fa fa-instagram"></i></a>
            </b-taglist>
        </div>
    </b-field>
</template>

<script>
import LayoutMixin from '@/mixins/LayoutMixin'
import constants from './../constants'

export default {
    name:'MediaBar',
    mixins:[LayoutMixin],
    data(){
        return {
            constants
        }
    },
    computed:{
        getClass(){
            return {media:true, control:true, "is-mobile": this.isMobile}
        }
    }
}
</script>

<style>
.media.is-mobile{
    position: absolute;
    top:8px;
    right:60px;
    z-index:999;
}
.media-bar.field.is-grouped{
    justify-content: flex-end;
}
</style>
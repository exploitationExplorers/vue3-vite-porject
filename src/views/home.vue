<template>
  <div class="body">
    <header>
      <h1>大数据可视化</h1>
    </header>
    <section class="container">
        <section class="itemLeft">
          <Item>
            <Item_one/>
          </Item>
          <Item>
            <Item_two/>
          </Item>
        </section>
        <section class="itemCenter">
            <Map></Map>
        </section>
        <section class="itemRight">
           <Item>
            <Item_three/>
          </Item>
          <Item>
            <Item_four/>
          </Item>
        </section>
    </section>
  </div>
</template>



<script lang="ts" setup>
import Map from '@/components/Data/Map.vue'
import Item_one from '@/components/Data/item-one.vue'
import Item from '@/components/Data/item.vue'
import Item_two from '@/components/Data/item_two.vue'
import Item_three from '@/components/Data/item-three.vue'
import Item_four  from '@/components/Data/item-four.vue'
</script>

<style lang="less">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.body  {
    height: 100vh;
    width: 100%;
    background: url("@/assets/bj.png")  center no-repeat;
    background-size: 100% 100%;
    
}
header {
    height: 1rem;
    width: 100%;
    background-color: rgba(36, 115, 215, 0.1);
    h1{
        font-size: 0.375rem;
        color: #fff;
        text-align: center;
        line-height: 1rem;
    }
}
.container{
  min-width: 1200px;
  max-width: 2048px;
  margin: 0 auto;
  padding: 0.125rem 0.125rem 0;
  display: flex;
  .itemLeft,
  .itemRight {
    flex: 3;
  }

  .itemCenter {
    flex: 4;
    height: 11.5rem;
    border: 1px solid rgba(0, 0, 255, 0.5);
    padding:  0.125rem;
    margin: .25rem;
  }
}

</style>

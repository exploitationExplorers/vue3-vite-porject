<template>
  <div class="map" id="map"></div>
</template>



<script  setup lang="ts">
import axios from 'axios';
import * as echarts from "echarts";
import { reactive,onMounted } from 'vue';
let mapData = reactive({});

async function getMapData() {
    mapData = await axios.get("/china/data")
    echarts.registerMap("china",mapData.data.chinaData)
    let mapchart = echarts.init(document.getElementById("map"))
    mapchart.setOption({
          // 地理 坐标
          geo: {
            map: "china",
            itemStyle: {
              areaColor: "#0099ff",
              borderColor: "#00ffff",
              shadowColor: "rgba(230,130,70,0.5)",
              shadowBlur: 30,
              emphasis: {
                focus: "self",
              },
            },
          },

          //   散点图数据
          // 气泡点
          tooltip:{
              trigger:"item"
          },
          title:{
              text:"城市销量",
              left:"45%",
              textStyle:{
                  color:"#fff",
                  fontSize:22,
                  textShadowBlur:10, //文本阴影
                  textShadowColor:"#33ffff"
              }
          },
          //  视觉映射
          visualMap:{
              type:"continuous", // 连续类型
              min:100,
              max:5000,
              calculable:true, //滑动效果
              inRange:{
                  color:["#50a3ba","#eac736","#d94e5d"],
              },
              textStyle:{
                  color:"#fff"
              }
              
          },
          series: [
            {
              type: "scatter",  // 散点图
              itemStyle: {
                color: "red",
              },
              coordinateSystem:"geo", // 指定坐标系 
              data: [
                { name: "北京", value: [116.46, 39.92, 4367] },
                { name: "上海", value: [121.48, 31.22, 8675] },
                { name: "深圳", value: [114.07, 22.62, 2461] },
                { name: "广州", value: [113.23, 23.16, 187] },
                { name: "西安", value: [108.45, 34, 3421] },
              ],
            },
          ],
        });
}
onMounted(()=>{
    getMapData().then(()=>{
        // console.log(mapData,'mapdata');
        // console.log(mapData.data.chinaData);
        
    })
    
})
</script>

<style lang="less">
.map {
  width: 100%;
  height: 100%;
}
</style>

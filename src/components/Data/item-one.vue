<template>
  <div>
    <h2>图表1</h2>
    <div class="chart" id="oneChart">图表的容器</div>
  </div>
</template>



<script setup lang="ts">
import *as echarts from 'echarts'
import { onMounted, reactive } from 'vue';
import axios  from 'axios';


let data:Object  = reactive({})

let x_data = reactive([])

let  y_data = reactive([])

function setData(){
    x_data = data.data.chartData.chartData.map((v:any)=> v.title)
    y_data = data.data.chartData.chartData.map((v:any) => v.num);
    // console.log("xdata", x_data);
    //   console.log("ydata", y_data);
}

async function getState() {
    data = await axios({ url: "/one/data" })
    
}

onMounted(()=>{
    let mycharts = echarts.init(document.getElementById('oneChart'))
    getState().then(()=>{
        setData()
        mycharts.setOption({
          grid:{
            top:"1%",
            left:"1%",
            right:"6%",
            bottom:"3%",
            containLabel:true

          },
          xAxis: {
            type: "value",
            axisLine:{
              lineStyle:{
                color:"#fff"
              }
            }
          },
          yAxis: {
            type: "category",
            data: x_data,
             axisLine:{
              lineStyle:{
                color:"rgba(0, 153, 255,0.9)"
              }
            }
          },
          series: [
            {
              data: y_data,
              type: "bar",
              itemStyle: {
                normal: {
                  barBorderRadius:[0,20,20,0],
                  color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    {
                      offset: 0,
                      color: "#005eaa",
                    },
                    {
                      offset: 0.5,
                      color: "#339ca8",
                    },
                    {
                      offset: 1,
                      color: "#cda819",
                    },
                  ]),
                },
              },
            },
          ],
        });
    })
})
</script>

<style lang="less" scoped>
.chart {
    height: 4.5rem;
}
h2 {
  height: 0.6rem;
  color: rgba(1, 8, 16,0.7);
  line-height: 0.6rem;
  font-size: 0.30rem;
  text-align: center;
}

</style>

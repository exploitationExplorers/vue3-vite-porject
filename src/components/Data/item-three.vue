<template>
    <div>
      <h2>库存统计</h2>
      <div class="chart" id="myEcharts">图表的容器</div>
    </div>
  </template>
  
  <script lang="ts">
  import { onMounted, reactive } from "vue";
  import axios from "axios";
  import * as echarts from "echarts";
  
  interface ChartData {
    name: string;
    value: number;
  }
  
  interface ChartThree {
    chartData: ChartData[];
  }
  
  interface Data {
    chartThree: ChartThree;
  }
  
  interface State {
    data: Data;
  }
  
  export default {
    setup() {
      const state = reactive<State>({
        data: {
          chartThree: {
            chartData: [],
          },
        },
      });
  
      async function getState() {
        const res = await axios({ url: "/three/data" });
        state.data = res.data;
        console.log(res.data,'three');
        
      }
  
      onMounted(async () => {
        await getState();
        console.log("饼状图", state.data);
        const myChart = echarts.init(document.getElementById("myEcharts"));
        myChart.setOption({
          legend: {
            show: true,
            top: "bottom",
            textStyle: {
              color: "yellowgreen",
            },
          },
          tooltip: {
            show: true,
          },
          series: [
            {
              type: "pie",
              data: state.data.chartThree.chartData,
              radius: [10, 100],
              center: ["50%", "45%"],
              roseType: "area",
              itemStyle: {
                borderRadius: 10,
              },
            },
          ],
        });
      });
  
      return {
        state,
      };
    },
  };
  </script>
  
  <style lang="less" scoped>
  h2 {
    height: 0.6rem;
    color: #fff;
    line-height: 0.6rem;
    font-size: 0.25rem;
    text-align: center;
  }
  
  .chart {
    height: 4.5rem;
  }
  </style>
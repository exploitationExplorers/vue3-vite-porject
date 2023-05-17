<template>
  <div>
    <h2>库存统计图</h2>
    <div class="chart" id="myEchartsFour">图表的容器</div>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { onMounted, reactive } from "vue";
import * as echarts from "echarts";

interface Num {
    Clothes: number[],
    digit: number[],
    Electrical:number[],
    Chemicals:number[],
    gear:number[]
}

interface ChartFour {
  chartData: ChartData;
}

interface ChartData {
  day: string[];
  num: Num;
}

interface Data {
  chartFour: ChartFour;
}
interface State {
  data: Data;
}

const state = reactive<State>({
  data: {
    chartFour: {
      chartData: {
        day: [],
        num: {
            Clothes: [],
            digit:[],
            Electrical: [],
            Chemicals:[],
            gear:[]
        },
      },
    },
  },
});
async function getState() {
  const res = await axios({ url: "/four/data" });
  state.data = res.data;
  const myChart = echarts.init(document.getElementById("myEchartsFour"));
  myChart.setOption({
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: state.data.chartFour.chartData.day,
    },
    yAxis: {
      type: "value",
    },
    legend: {
        textStyle:{
            color: 'yellogreen'
        }
    }, //图例
    tooltip: { //提示框
      show: true,
      trigger: "axis",//在 trigger为’axis’的时候，会有多个系列的数据，此时可以通过{a0}，{a1},{a2}这种后面加索引的方式表示系列的索引
      axisPointer: {
        type: "shadow",
      },
    },
    series: [
      {
        name: "服饰",
        type: "bar",
        data: state.data.chartFour.chartData.num.Clothes,
        stack: "total", // 堆叠效果
        label: {
          show: true,
        },
        emphasis: {
          focus: "series", // 聚焦当前高亮的数据所在的系列的所有图形
        },
      },
      {
        name: "数码",
        type: "bar",
        data: state.data.chartFour.chartData.num.digit,
        stack: "total",
        label: {
          show: true,
        },
        emphasis: {
          focus: "series",
        },
      },
      {
        name: "家电",
        type: "bar",
        data: state.data.chartFour.chartData.num.Electrical,
        stack: "total",
        label: {
          show: true,
        },
        emphasis: {
          focus: "series",
        },
      },
      {
        name: "家居",
        type: "bar",
        data: state.data.chartFour.chartData.num.gear,
        stack: "total",
        label: {
          show: true,
        },
        emphasis: {
          focus: "series",
        },
      },
      {
        name: "日化",
        type: "bar",
        data: state.data.chartFour.chartData.num.Chemicals,
        stack: "total",
        label: {
          show: true,
        },
        emphasis: {
          focus: "series",
        },
      },
    ],
  });
}

onMounted(async () => {
  await getState();
  console.log(state.data, "four");
});
</script>

<style lang="less"></style>

<template>
  <div>
    <h2>周销图</h2>
    <div class="chart" id="myEchartsTwo">图表的容器</div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from "echarts";
import axios from "axios";
import { reactive, onMounted } from "vue";

var data = reactive({});

const getState = () => {
  axios.get("/two/data").then((res) => {
    data = res.data.chartTwo.chartData;
    console.log(data);
    let charts = echarts.init(document.querySelector("#myEchartsTwo"));
    charts.setOption({
      color: ["#80FFA5", "#00DDFF", "#37A2FF", "#FF0087", "#FFBF00"],

      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          label: {
            backgroundColor: "#6a7985",
          },
        },
      },
      legend: {
        textStyle: {
          color: "yellowgreen", // 文字颜色
        },
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",

          boundaryGap: false,
          data: data.day,
          axisLine: {
            lineStyle: {
              color: "yellowgreen",
            },
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          axisLine: {
            lineStyle: {
              color: "#ffaa",
            },
          },
        },
      ],
      series: [
        {
          name: "服饰",
          type: "line",
          data: data.num.Chemicals,
          smooth: true,
          showSymbol: false,
          stack: "Total",
          lineStyle: {
            width: 0,
          },
          emphasis: {
            focus: "series",
          },

          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgb(128, 255, 165)",
              },
              {
                offset: 1,
                color: "rgb(1, 191, 236)",
              },
            ]),
          },
        },
        {
          name: "数码 ",
          type: "line",
          data: data.num.Clothes,
          stack: "Total", //数据堆叠
              smooth: true, //折线图平滑效果 变成曲线图
              showSymbol: false, //   隐藏所有数据点

              areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgb(0, 221, 255)",
                  },
                  {
                    offset: 1,
                    color: "rgb(77, 119, 255)",
                  },
            ]),
          },
        },
        {
          name: "家电 ",
          type: "line",
          data: data.num.Electrical,
          stack: "Total", //数据堆叠
              smooth: true, //折线图平滑效果 变成曲线图
              showSymbol: false, //   隐藏所有数据点

              areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgb(55, 162, 255)",
                  },
                  {
                    offset: 1,
                    color: "rgb(116, 21, 219)",
                  },
            ]),
          },
        },
        {
          name: "家居 ",
          type: "line",
          data: data.num.digit,
          stack: "Total", //数据堆叠
              smooth: true, //折线图平滑效果 变成曲线图
              showSymbol: false, //   隐藏所有数据点

              areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgb(255, 0, 135)",
                  },
                  {
                    offset: 1,
                    color: "rgb(135, 0, 157)",
                  },
            ]),
          },
        },
        {
          name: "日化 ",
          type: "line",
          data: data.num.gear,
          stack: "Total", //数据堆叠
              smooth: true, //折线图平滑效果 变成曲线图
              showSymbol: false, //   隐藏所有数据点
              areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgb(255, 191, 0)",
                  },
                  {
                    offset: 1,
                    color: "rgb(224, 62, 76)",
                  },
            ]),
          },
        },
      ],
    });
  });
};

onMounted(() => {
  getState();
});
</script>

<style>
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

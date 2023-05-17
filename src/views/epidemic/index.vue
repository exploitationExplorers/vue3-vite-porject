<template>
  <div class="box">
    <div class="box-left" style="color: whitesmoke;">
      <table class="table" cellpadding="0" border="1">
        <thead>
          <tr>
            <th>地区</th>
            <th>温度</th>
            <th>湿度</th>
            <th>风力</th>
            <th>天气情况</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>广东</td>
            <td>山东</td>
            <td>福建</td>
            <td>广西</td>
            <td>西藏</td>
          </tr>
          <tr>
            <td>广东</td>
            <td>山东</td>
            <td>福建</td>
            <td>广西</td>
            <td>西藏</td>
          </tr>
          <tr>
            <td>广东</td>
            <td>山东</td>
            <td>福建</td>
            <td>广西</td>
            <td>西藏</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="china" class="box-center">
      <div class="title">
        <h1>数据可视化</h1>
      </div>
    </div>
    <div class="box-right">
      <div class="right-pie"></div>
    </div>
  </div>
</template>
<!-- <script src="https://webapi.amap.com/maps?v=1.4.15&key=8e0f4bdfa13b7cd3b435e52e34236af4"></script> -->

<script setup lang="ts">
import { userCounterStore } from "../../store/index";
import { onMounted } from "vue";
import * as echarts from "echarts/core";
import "@/assets/china";
const store = userCounterStore();

onMounted(() => {
  initCharts();
  initPie();
});

const initCharts = () => {
  const charts = echarts.init(document.querySelector("#china") as HTMLElement);
  var data = [
    {
      name: "内蒙古",
      itemStyle: {
        areaColor: "#561da",
      },
      value: [110.3467, 41.4899],
    },
  ];

  charts.setOption({
    geo: {
      map: "china",
      aspectScale: 0.8,
      layoutCenter: ["50%", "50%"],
      layoutSize: "100%",
      
      itemStyle: {
        //  normal: {
        areaColor: {
          type: "linear-gradient",
          x: 0,
          y: 1200,
          x2: 1000,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: "#152E6E", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "#0673AD", // 50% 处的颜色
            },
          ],
          global: true, // 缺省为 false
        },
        shadowColor: "#0f5d9d",
        shadowOffsetX: 0,
        shadowOffsetY: 15,
        opacity: 0.5,
        // },
      },
      emphasis: {
        areaColor: "#0f5d9d",
        focus:"self"
      },

      regions: [
        {
          name: "南海诸岛",
          itemStyle: {
            areaColor: "rgba(0, 10, 52, 1)",
            borderColor: "rgba(0, 10, 52, 1)",
            //normal: {
            opacity: 0,
            label: {
              show: false,
              color: "#009cc9",
            },
            //},
          },
          label: {
            show: false,
            color: "#FFFFFF",
            fontSize: 12,
          },
        },
      ],
    },
    series: [
      {
        type: "map",
        map: "china",
        aspectScale: 0.8,
        layoutCenter: ["50%", "50%"], //地图位置
        layoutSize: "100%",
        label: {
          show: true,
          color: "#FFFFFF",
          fontSize: 10,
        },
        itemStyle: {
          areaColor: "#0c3653",
          borderColor: "#1cccff",
          borderWidth: 1.8,
        },
        emphasis: {
          areaColor: "#56b1da",
          label: {
            show: true,
            color: "#fff",
          },
        },
        data: data,
      },
      {
        type: "scatter",
        coordinateSystem: "geo",
        symbol: "pin", //改成气泡
        symbolSize: [45, 45],
        label: {
          show: true,
          color: "#fff",
          formatter(value: any) {
            return value.data.value[2];
          },
        },
        itemStyle: {
          color: "#1E90FF", //标志颜色
        },
        data: data,
      },
    ],
  });
  charts.on("click", (e) => {
    console.log(e);
  });
};

const initPie = () => {
  const charts = echarts.init(
    document.querySelector(".right-pie") as HTMLElement
  );
  charts.setOption({
    backgroundColor: "#223651",
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: "Search Engine" },
          { value: 735, name: "Direct" },
          { value: 580, name: "Email" },
          { value: 484, name: "Union Ads" },
          { value: 300, name: "Video Ads" },
        ],
      },
    ],
  });
};

// store.getList();
</script>

<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
}
.box {
  background: url("@/assets/page1_3.jpg") no-repeat;
  background-size: 100% 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  &-left {
    width: 400px;
    .table {
      width: 100%;
      background: #212028;
      tr {
        th {
          padding: 5px;
          white-space: nowrap;
        }
        td {
          padding: 5px 10px;
          width: 100px;
          white-space: nowrap;
        }
      }
    }
  }
  &-center {
    flex: 1;
    height: 500px;
    width: 500px;
    position: relative;
    .title {
      position: absolute;
      color: black;
    }
  }
  &-right {
    width: 450px;
    .right-pie {
      width: 100%;
      height: 400px;
    }
  }
}
</style>

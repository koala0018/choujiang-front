<script>
import { h, defineComponent } from "vue";
import { NTag, NButton } from "naive-ui";


const createColumns = () => {
  return [
    {
      title: "Name",
      key: "name"
    },
    {
      title: "Age",
      key: "age"
    },
    {
      title: "Address",
      key: "address"
    },
    {
      title: "Tags",
      key: "tags",
      render(row) {
        const tags = row.tags.map((tagKey) => {
          return h(
              NTag,
              {
                style: {
                  marginRight: "6px"
                },
                type: "info",
                bordered: false
              },
              {
                default: () => tagKey
              }
          );
        });
        return tags;
      }
    },
    {
      title: "Action",
      key: "actions",
      render(row) {
        return h(
            NButton,
            {
              size: "small",
            },
            { default: () => "Send Email" }
        );
      }
    }
  ];
};

const createData = () => [
  {
    key: 0,
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"]
  },
  {
    key: 1,
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["wow"]
  },
  {
    key: 2,
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"]
  }
];

export default defineComponent({
  setup() {
    return {
      data: createData(),
      columns: createColumns(),
      pagination: {
        pageSize: 10
      }
    };
  }
});
</script>

<template>
  <div class="header_content">
    <div class="title_content">
      <div class="logo">
        <!--          <img src="@/assets/img/logo.png" alt="" style="width: 40px; height: 40px" />-->
        <!--          <img src="@/assets/img/HTTitle.png" style="margin-left: 8px" alt="" />-->
      </div>
      <div class="message">
        咱去哪玩撒?
      </div>
    </div>
  </div>

  <n-space vertical :size="12" class="space">
    <div class="space-empty"></div>
    <div class="space-table">
      <n-data-table
          size="large"
          :columns="columns"
          :data="data"
          :pagination="pagination"
      />
    </div>
    <div class="space-empty"></div>
  </n-space>
</template>

<style scoped lang="scss">

.space {
  display: flex;
  justify-content: center;
}
.content {
  width: 1000px;
  margin: 8px auto;
}

.content-height {
  margin-top: 55px;
}

.mb_40 {
  bottom: 40px;
}

.footer {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
}

.red {
  color: red
}
.div-isManaged {
  display: flex;
  justify-content: space-between;
}
.span-isManaged {
  font-size: 17px;
}
.header_content{
  width: 100%;
  position: fixed;
  top: 0;
  background-color: rgb(71, 127, 240);
  .title_content{
    height: 48px;
    width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .logo{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .message{
      color: #fff;
      font-size: 18px;
      line-height: 48px;
    }
  }
}

</style>

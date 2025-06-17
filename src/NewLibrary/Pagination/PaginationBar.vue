<template>
  <div class="new-library-page flex">
    <button
      :disabled="isPrevDisabled"
      @click="pageDecrement"
    >
      <span class="material-icons-outlined prev-next-pagination">
        chevron_left
      </span>
    </button>
    <el-pagination
      layout="pager"
      :page-count="totalPages"
      :page-size="pageSize"
      :current-page="currentPage"
      @current-change="handleCurrentPage"
    />
    <button
      :disabled="isNextDisabled"
      @click="pageIncrement"
    >
      <span class="material-icons-outlined prev-next-pagination">
        chevron_right
      </span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      default: 0
    },
    totalPages: {
      type: Number,
      default: null,
    },
    pageSize: {
      type: Number,
      default: 10,
    },
    searchInit: {
      type: Number,
      default: 0,
    },    
  },
  data() {
    return {
      currentPage: 1,
    };
  },

  computed: {
    // disabled prev btn if current page is first page
    isPrevDisabled() {
      return this.currentPage === 1 ? true : false;
    },
    // disabled next btn if current page is the last page
    isNextDisabled() {
      return this.currentPage === this.totalPages ? true : false;
    },
  },

  watch: {
    totalPages(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.handleCurrentPage(1);
      }
    },
    // when items length is the same during the search process
    searchInit(newVal, oldVal) {
      // this.currentPage = 1;
      this.handleCurrentPage(1)
    },    
  },

  emits: ["changePage"],

  methods: {
    handleCurrentPage(curPage) {
      if (this.currentPage === curPage) {
        return;
      }
      this.currentPage = curPage;
      this.$emit("changePage", this.currentPage);
    },
    pageIncrement() {
      if (this.currentPage < this.totalPages)
        this.currentPage += 1;
      this.$emit("changePage", this.currentPage);
    },
    pageDecrement() {
      if (this.currentPage > 1)
        this.currentPage -= 1;
      this.$emit("changePage", this.currentPage);
    },
  }
};
</script>

<style scoped>
.prev-next-pagination {
  height: 32px;
  width: 32px;
  padding: 4px 3px;
  border-radius: 18px;
  background-color: rgba(0, 0, 0, 0.1);
}
</style>

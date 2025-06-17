<template>
  <div class="w-full mt-9 mb-24">
    <div class="flex justify-between items-center">
      <p class="show-updates-number">
        Showing
        {{ currentPageFirstItemRank }}
        to {{ currentPageLastItemRank }} 
        of {{ totalCount + " " + getUnit() }} 
      </p>
      <div class="self-center">
        <PaginationBar
          :page-size="pageSize"
          :total="totalCount"
          :total-pages="totalPages"
          @changePage="changePage"
        />
      </div>
      <SingleSelector 
        class="page-selector"
        defaultOption="5"
        :options="formattedPageSizeOptions"
        @change="changePageSize"
      />
    </div>
  </div>
</template>

<script>
import PaginationBar from "./PaginationBar.vue";
import SingleSelector from "../SingleSelector.vue";

export default {
  name: 'Pagination',
  components: {
    PaginationBar,
    SingleSelector,
  },
  props: {
    rows: {
      type: Array,
      default: () => [],
    },
    pageSizeParent: {
      type: Number,
      default: 5,
    },
    currentPageParent: {
      type: Number,
      default: 1,
    },
    pageOptions: {
      type: Array,
      default: () => [5, 10, 50],
    },
    getUnit: {
      type: Function,
      default: () => "Items",
    },
  },
  data() {
    return {
      currentPage: 1,
      pageSize: 5,
    };
  },

  emits: ["updatePage"],

  computed: {
    totalCount() {
      return this.rows.length;
    },

    totalPages() {
      return Math.ceil(this.totalCount / this.pageSize);
    },

    currentPageFirstItemRank() {
      return Math.min(this.pageSize * (this.currentPage - 1) + 1, this.totalCount);
    },

    currentPageLastItemRank() {
      return Math.min(this.totalCount, this.pageSize * this.currentPage);
    },

    formattedPageSizeOptions() {
      const options = [];
      this.pageOptions.forEach(option => {
        options.push({ value: option.toString(), label: `${option} per page` });
      });
      return options;
    },
  },
  mounted() {
    this.pageSize = this.pageSizeParent;
    this.currentPage = this.currentPageParent;
  },
  methods: {
    changePageSize(pageSize) {
      this.currentPage = 1; 
      this.pageSize = pageSize;
      this.updatePage();
    },
    changePage(page) {
      this.currentPage = page;
      this.updatePage();
    },
    updatePage() {
      this.$emit('updatePage', { pageSize: this.pageSize, currentPage: this.currentPage });
    }
  },
};
</script>

<style scoped>
.page-selector {
  width: 200px;
}
</style>
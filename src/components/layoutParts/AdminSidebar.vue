<template>

  <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
    <div class="sidebar-sticky pt-3">
      <b-nav
        class="flex-column"
        tag="ul"
      >
        <b-nav-item href="#" active>
          <b-icon-house></b-icon-house>
          Dashboard <span class="sr-only">(current)</span>
        </b-nav-item>
        <b-nav-item href="#">
          <b-icon-file></b-icon-file>
          Orders
        </b-nav-item>
        <b-nav-item href="#">
          <b-icon-cart></b-icon-cart>
          Products
        </b-nav-item>
        <b-nav-item href="#">
          <b-icon-person></b-icon-person>
          Customers
        </b-nav-item>
        <b-nav-item href="#">
          <span data-feather="bar-chart-2"></span>
          Reports
        </b-nav-item>
        <b-nav-item href="#">
          <span data-feather="layers"></span>
          Integrations
        </b-nav-item>

      </b-nav>

      <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
        <span>Saved reports</span>
        <a class="d-flex align-items-center text-muted" href="#" aria-label="Add a new report">
          <span data-feather="plus-circle"></span>
        </a>
      </h6>

      <b-nav
        class="flex-column mb-2"
        tag="ul"
      >
        <b-nav-item href="#">
          <span data-feather="file-text"></span>
          Current month
        </b-nav-item>
        <b-nav-item href="#">
          <span data-feather="file-text"></span>
          Last quarter
        </b-nav-item>
        <b-nav-item href="#">
          <span data-feather="file-text"></span>
          Social engagement
        </b-nav-item>
        <b-nav-item href="#">
          <span data-feather="file-text"></span>
          Year-end sale
        </b-nav-item>
        <b-nav-item href="#">
          <span data-feather="bar-chart-2"></span>
          Reports
        </b-nav-item>
        <b-nav-item href="#">
          <span data-feather="layers"></span>
          Integrations
        </b-nav-item>

      </b-nav>
    </div>
  </nav>

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AdminSidebar extends Vue {
}
</script>

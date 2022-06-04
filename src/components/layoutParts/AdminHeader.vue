<template>
  <div>

    <b-navbar
      type="dark"
      variant="dark"
      tag="nav"
      class="flex-md-nowrap shadow"
      sticky
    >
      <b-navbar-brand
        class="col-md-3 col-lg-2 mr-0 px-3"
        href="#"
      >Company name</b-navbar-brand>

      <b-form-input
        class="w-100"
        type="text"
        placeholder="Search"
        aria-label="Search"
      ></b-form-input>

      <b-navbar-nav
        class="px-3"
        tag="ul"
      >
        <b-nav-item class="text-nowrap">Sign out</b-nav-item>
      </b-navbar-nav>

    </b-navbar>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AdminHeader extends Vue {
}
</script>

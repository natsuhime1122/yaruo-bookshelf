<template>
  <div>

    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 class="h2">Dashboard</h1>
      <div class="btn-toolbar mb-2 mb-md-0">
        <div class="btn-group mr-2">
          <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
          <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
        </div>
        <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
          <span data-feather="calendar"></span>
          This week
        </button>
      </div>
    </div>

    <canvas
      id="myChart"
      class="my-4 w-100"
      width="900"
      height="380"
    ></canvas>

    <h2>Section title</h2>
    <div class="table-responsive">
      <b-table
        striped
        size="sm"
        :fields="fields"
        :items="items"
      ></b-table>
    </div>


  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {
  private fields = [
    {key: 'id', label: '#', sortable: true},
    {key: 'Header1', label: 'Header', sortable: true},
    {key: 'Header2', label: 'Header', sortable: true},
    {key: 'Header3', label: 'Header', sortable: true},
    {key: 'Header4', label: 'Header', sortable: true},
  ];

  private items = [
    {
      id: '1,001',
      Header1: 'random',
      Header2: 'data',
      Header3: 'placeholder',
      Header4: 'text'
    },
    {
      id: '1,002',
      Header1: 'placeholder',
      Header2: 'irrelevant',
      Header3: 'visual',
      Header4: 'layout'
    },
    {
      id: '1,003',
      Header1: 'data',
      Header2: 'rich',
      Header3: 'dashboard',
      Header4: 'tabular'
    },
    {
      id: '1,004',
      Header1: 'information',
      Header2: 'placeholder',
      Header3: 'illustrative',
      Header4: 'data'
    },
    {
      id: '1,005',
      Header1: 'text',
      Header2: 'random',
      Header3: 'layout',
      Header4: 'dashboard'
    },
  ];
}
</script>

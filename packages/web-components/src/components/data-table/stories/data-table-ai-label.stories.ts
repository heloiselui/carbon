/**
 * Copyright IBM Corp. 2019, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import View16 from '@carbon/icons/lib/view/16.js';
import FolderOpen16 from '@carbon/icons/lib/folder--open/16.js';
import Folders16 from '@carbon/icons/lib/folders/16.js';
import storyDocs from './data-table-ai-label.mdx';
import '../index';
import '../../icon-button/index';
import '../../link/index';
import '../../ai-label/index';

const content = html`
  <div slot="body-text">
    <p class="secondary">AI Explained</p>
    <h2 class="ai-label-heading">84%</h2>
    <p class="secondary bold">Confidence score</p>
    <p class="secondary">
      Lorem ipsum dolor sit amet, di os consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut fsil labore et dolore magna aliqua.
    </p>
    <hr />
    <p class="secondary">Model type</p>
    <p class="bold">Foundation model</p>
  </div>
`;

const actions = html`
  <cds-icon-button kind="ghost" slot="actions" size="lg">
    ${View16({ slot: 'icon' })}
    <span slot="tooltip-content"> View </span>
  </cds-icon-button>
  <cds-icon-button kind="ghost" slot="actions" size="lg">
    ${FolderOpen16({ slot: 'icon' })}
    <span slot="tooltip-content"> Open folder</span>
  </cds-icon-button>
  <cds-icon-button kind="ghost" slot="actions" size="lg">
    ${Folders16({ slot: 'icon' })}
    <span slot="tooltip-content"> Folders </span>
  </cds-icon-button>
  <cds-ai-label-action-button>View Literature</cds-ai-label-action-button>
`;

export const _AILabelWithExpansion = {
  render: () => {
    return html`
      <cds-table with-row-ai-labels expandable batch-expansion>
        <cds-table-header-title slot="title">DataTable</cds-table-header-title>
        <cds-table-header-description slot="description"
          >With sorting</cds-table-header-description
        >

        <cds-table-head>
          <cds-table-header-row>
            <cds-table-header-cell>Name</cds-table-header-cell>
            <cds-table-header-cell>Protocol</cds-table-header-cell>
            <cds-table-header-cell>Port</cds-table-header-cell>
            <cds-table-header-cell>Rule</cds-table-header-cell>
            <cds-table-header-cell>Attached groups</cds-table-header-cell>
            <cds-table-header-cell>Status</cds-table-header-cell>
          </cds-table-header-row>
        </cds-table-head>
        <cds-table-body>
          <cds-table-row>
            <cds-table-cell>Load Balancer 3</cds-table-cell>
            <cds-table-cell>HTTP</cds-table-cell>
            <cds-table-cell>3000</cds-table-cell>
            <cds-table-cell>Round robin</cds-table-cell>
            <cds-table-cell>Kevin's VM Groups</cds-table-cell>
            <cds-table-cell
              ><cds-link disabled>Disabled</cds-link></cds-table-cell
            >
          </cds-table-row>
          <cds-table-expanded-row>
            <h6>Expandable row content</h6>
            <div>Description here</div>
          </cds-table-expanded-row>
          <cds-table-row>
            <cds-ai-label alignment="bottom-left"
              >${content}${actions}</cds-ai-label
            >
            <cds-table-cell>Load Balancer 1</cds-table-cell>
            <cds-table-cell>HTTP</cds-table-cell>
            <cds-table-cell>443</cds-table-cell>
            <cds-table-cell>Round robin</cds-table-cell>
            <cds-table-cell>Maureen's VM Groups</cds-table-cell>
            <cds-table-cell><cds-link>Starting</cds-link></cds-table-cell>
          </cds-table-row>
          <cds-table-expanded-row>
            <h6>Expandable row content</h6>
            <div>Description here</div>
          </cds-table-expanded-row>
          <cds-table-row>
            <cds-table-cell>Load Balancer 2</cds-table-cell>
            <cds-table-cell>HTTP</cds-table-cell>
            <cds-table-cell>80</cds-table-cell>
            <cds-table-cell>DNS delegation</cds-table-cell>
            <cds-table-cell>Andrew's VM Groups</cds-table-cell>
            <cds-table-cell><cds-link>Active</cds-link></cds-table-cell>
          </cds-table-row>
          <cds-table-expanded-row>
            <h6>Expandable row content</h6>
            <div>Description here</div>
          </cds-table-expanded-row>
          <cds-table-row>
            <cds-ai-label alignment="bottom-left"
              >${content}${actions}</cds-ai-label
            >
            <cds-table-cell>Load Balancer 6</cds-table-cell>
            <cds-table-cell>HTTP</cds-table-cell>
            <cds-table-cell>3000</cds-table-cell>
            <cds-table-cell>Round robin</cds-table-cell>
            <cds-table-cell>Marc's VM Groups</cds-table-cell>
            <cds-table-cell
              ><cds-link disabled>Disabled</cds-link></cds-table-cell
            >
          </cds-table-row>
          <cds-table-expanded-row>
            <h6>Expandable row content</h6>
            <div>Description here</div>
          </cds-table-expanded-row>
          <cds-table-row>
            <cds-ai-label alignment="bottom-left"
              >${content}${actions}</cds-ai-label
            >
            <cds-table-cell>Load Balancer 4</cds-table-cell>
            <cds-table-cell>HTTP</cds-table-cell>
            <cds-table-cell>443</cds-table-cell>
            <cds-table-cell>Round robin</cds-table-cell>
            <cds-table-cell>Mel's VM Groups</cds-table-cell>
            <cds-table-cell><cds-link>Starting</cds-link></cds-table-cell>
          </cds-table-row>
          <cds-table-expanded-row>
            <h6>Expandable row content</h6>
            <div>Description here</div>
          </cds-table-expanded-row>
          <cds-table-row>
            <cds-table-cell>Load Balancer 5</cds-table-cell>
            <cds-table-cell>HTTP</cds-table-cell>
            <cds-table-cell>80</cds-table-cell>
            <cds-table-cell>DNS delegation</cds-table-cell>
            <cds-table-cell>Ronja's VM Groups</cds-table-cell>
            <cds-table-cell><cds-link>Active</cds-link></cds-table-cell>
          </cds-table-row>
          <cds-table-expanded-row>
            <h6>Expandable row content</h6>
            <div>Description here</div>
          </cds-table-expanded-row>
        </cds-table-body>
      </cds-table>
    `;
  },
};

export const _AILabelWithRadioSelection = {
  render: () => {
    return html`
      <cds-table radio with-row-ai-labels>
        <cds-table-header-title slot="title">DataTable</cds-table-header-title>
        <cds-table-header-description slot="description"
          >With selection</cds-table-header-description
        >

        <cds-table-head>
          <cds-table-header-row selection-name="header" hide-checkbox>
            <cds-table-header-cell>Name</cds-table-header-cell>
            <cds-table-header-cell>Protocol</cds-table-header-cell>
            <cds-table-header-cell>Port</cds-table-header-cell>
            <cds-table-header-cell>Rule</cds-table-header-cell>
            <cds-table-header-cell>Attached groups</cds-table-header-cell>
            <cds-table-header-cell>Status</cds-table-header-cell>
          </cds-table-header-row>
        </cds-table-head>
        <cds-table-body>
          <cds-table-row selection-name="0">
            <cds-table-cell>Load Balancer 3</cds-table-cell>
            <cds-table-cell>HTTP</cds-table-cell>
            <cds-table-cell>3000</cds-table-cell>
            <cds-table-cell>Round robin</cds-table-cell>
            <cds-table-cell>Kevin's VM Groups</cds-table-cell>
            <cds-table-cell
              ><cds-link disabled>Disabled</cds-link></cds-table-cell
            >
          </cds-table-row>
          <cds-table-row selection-name="1">
            <cds-ai-label alignment="bottom-left"
              >${content}${actions}</cds-ai-label
            >

            <cds-table-cell>Load Balancer 1</cds-table-cell>
            <cds-table-cell>HTTP</cds-table-cell>
            <cds-table-cell>443</cds-table-cell>
            <cds-table-cell>Round robin</cds-table-cell>
            <cds-table-cell>Maureen's VM Groups</cds-table-cell>
            <cds-table-cell><cds-link>Starting</cds-link></cds-table-cell>
          </cds-table-row>
          <cds-table-row selection-name="2">
            <cds-table-cell>Load Balancer 2</cds-table-cell>
            <cds-table-cell>HTTP</cds-table-cell>
            <cds-table-cell>80</cds-table-cell>
            <cds-table-cell>DNS delegation</cds-table-cell>
            <cds-table-cell>Andrew's VM Groups</cds-table-cell>
            <cds-table-cell><cds-link>Active</cds-link></cds-table-cell>
          </cds-table-row>
          <cds-table-row selection-name="3">
            <cds-ai-label alignment="bottom-left"
              >${content}${actions}</cds-ai-label
            >

            <cds-table-cell>Load Balancer 6</cds-table-cell>
            <cds-table-cell>HTTP</cds-table-cell>
            <cds-table-cell>3000</cds-table-cell>
            <cds-table-cell>Round robin</cds-table-cell>
            <cds-table-cell>Marc's VM Groups</cds-table-cell>
            <cds-table-cell
              ><cds-link disabled>Disabled</cds-link></cds-table-cell
            >
          </cds-table-row>
          <cds-table-row selection-name="4">
            <cds-ai-label alignment="bottom-left"
              >${content}${actions}</cds-ai-label
            >

            <cds-table-cell>Load Balancer 4</cds-table-cell>
            <cds-table-cell>HTTP</cds-table-cell>
            <cds-table-cell>443</cds-table-cell>
            <cds-table-cell>Round robin</cds-table-cell>
            <cds-table-cell>Mel's VM Groups</cds-table-cell>
            <cds-table-cell><cds-link>Starting</cds-link></cds-table-cell>
          </cds-table-row>
          <cds-table-row selection-name="5">
            <cds-table-cell>Load Balancer 5</cds-table-cell>
            <cds-table-cell>HTTP</cds-table-cell>
            <cds-table-cell>80</cds-table-cell>
            <cds-table-cell>DNS delegation</cds-table-cell>
            <cds-table-cell>Ronja's VM Groups</cds-table-cell>
            <cds-table-cell><cds-link>Active</cds-link></cds-table-cell>
          </cds-table-row>
        </cds-table-body>
      </cds-table>
    `;
  },
};

export const _AILabelWithSelection = {
  render: () => {
    return html`
      <cds-table with-row-ai-labels>
        <cds-table-header-title slot="title">DataTable</cds-table-header-title>
        <cds-table-header-description slot="description"
          >With selection</cds-table-header-description
        >

        <cds-table-head>
          <cds-table-header-row selection-name="header">
            <cds-table-header-cell>Name</cds-table-header-cell>
            <cds-table-header-cell>Protocol</cds-table-header-cell>
            <cds-table-header-cell>Port</cds-table-header-cell>
            <cds-table-header-cell>Rule</cds-table-header-cell>
            <cds-table-header-cell>Attached groups</cds-table-header-cell>
            <cds-table-header-cell>Status</cds-table-header-cell>
          </cds-table-header-row>
        </cds-table-head>
        <cds-table-body>
          <cds-table-row selection-name="0">
            <cds-table-cell>Load Balancer 3</cds-table-cell>
            <cds-table-cell>HTTP</cds-table-cell>
            <cds-table-cell>3000</cds-table-cell>
            <cds-table-cell>Round robin</cds-table-cell>
            <cds-table-cell>Kevin's VM Groups</cds-table-cell>
            <cds-table-cell
              ><cds-link disabled>Disabled</cds-link></cds-table-cell
            >
          </cds-table-row>
          <cds-table-row selection-name="1">
            <cds-ai-label alignment="bottom-left"
              >${content}${actions}</cds-ai-label
            >
            <cds-table-cell>Load Balancer 1</cds-table-cell>
            <cds-table-cell>HTTP</cds-table-cell>
            <cds-table-cell>443</cds-table-cell>
            <cds-table-cell>Round robin</cds-table-cell>
            <cds-table-cell>Maureen's VM Groups</cds-table-cell>
            <cds-table-cell><cds-link>Starting</cds-link></cds-table-cell>
          </cds-table-row>
          <cds-table-row selection-name="2">
            <cds-table-cell>Load Balancer 2</cds-table-cell>
            <cds-table-cell>HTTP</cds-table-cell>
            <cds-table-cell>80</cds-table-cell>
            <cds-table-cell>DNS delegation</cds-table-cell>
            <cds-table-cell>Andrew's VM Groups</cds-table-cell>
            <cds-table-cell><cds-link>Active</cds-link></cds-table-cell>
          </cds-table-row>
          <cds-table-row selection-name="3">
            <cds-ai-label alignment="bottom-left"
              >${content}${actions}</cds-ai-label
            >
            <cds-table-cell>Load Balancer 6</cds-table-cell>
            <cds-table-cell>HTTP</cds-table-cell>
            <cds-table-cell>3000</cds-table-cell>
            <cds-table-cell>Round robin</cds-table-cell>
            <cds-table-cell>Marc's VM Groups</cds-table-cell>
            <cds-table-cell
              ><cds-link disabled>Disabled</cds-link></cds-table-cell
            >
          </cds-table-row>
          <cds-table-row selection-name="4">
            <cds-ai-label alignment="bottom-left"
              >${content}${actions}</cds-ai-label
            >
            <cds-table-cell>Load Balancer 4</cds-table-cell>
            <cds-table-cell>HTTP</cds-table-cell>
            <cds-table-cell>443</cds-table-cell>
            <cds-table-cell>Round robin</cds-table-cell>
            <cds-table-cell>Mel's VM Groups</cds-table-cell>
            <cds-table-cell><cds-link>Starting</cds-link></cds-table-cell>
          </cds-table-row>
          <cds-table-row selection-name="5">
            <cds-table-cell>Load Balancer 5</cds-table-cell>
            <cds-table-cell>HTTP</cds-table-cell>
            <cds-table-cell>80</cds-table-cell>
            <cds-table-cell>DNS delegation</cds-table-cell>
            <cds-table-cell>Ronja's VM Groups</cds-table-cell>
            <cds-table-cell><cds-link>Active</cds-link></cds-table-cell>
          </cds-table-row>
        </cds-table-body>
      </cds-table>
    `;
  },
};

export const AILabelWithSelectionAndExpansion = {
  render: () => {
    return html`
      <cds-table expandable batch-expansion with-row-ai-labels>
        <cds-table-header-title slot="title">DataTable</cds-table-header-title>
        <cds-table-header-description slot="description"
          >With selection</cds-table-header-description
        >

        <cds-table-head>
          <cds-table-header-row selection-name="header">
            <cds-table-header-cell>Name</cds-table-header-cell>
            <cds-table-header-cell>Protocol</cds-table-header-cell>
            <cds-table-header-cell>Port</cds-table-header-cell>
            <cds-table-header-cell>Rule</cds-table-header-cell>
            <cds-table-header-cell>Attached groups</cds-table-header-cell>
            <cds-table-header-cell>Status</cds-table-header-cell>
          </cds-table-header-row>
        </cds-table-head>
        <cds-table-body>
          <cds-table-row selection-name="0">
            <cds-table-cell>Load Balancer 3</cds-table-cell>
            <cds-table-cell>HTTP</cds-table-cell>
            <cds-table-cell>3000</cds-table-cell>
            <cds-table-cell>Round robin</cds-table-cell>
            <cds-table-cell>Kevin's VM Groups</cds-table-cell>
            <cds-table-cell
              ><cds-link disabled>Disabled</cds-link></cds-table-cell
            >
          </cds-table-row>
          <cds-table-expanded-row>
            <h6>Expandable row content</h6>
            <div>Description here</div>
          </cds-table-expanded-row>
          <cds-table-row selection-name="1">
            <cds-ai-label alignment="bottom-left"
              >${content}${actions}</cds-ai-label
            >
            <cds-table-cell>Load Balancer 1</cds-table-cell>
            <cds-table-cell>HTTP</cds-table-cell>
            <cds-table-cell>443</cds-table-cell>
            <cds-table-cell>Round robin</cds-table-cell>
            <cds-table-cell>Maureen's VM Groups</cds-table-cell>
            <cds-table-cell><cds-link>Starting</cds-link></cds-table-cell>
          </cds-table-row>
          <cds-table-expanded-row>
            <h6>Expandable row content</h6>
            <div>Description here</div>
          </cds-table-expanded-row>
          <cds-table-row selection-name="2">
            <cds-table-cell>Load Balancer 2</cds-table-cell>
            <cds-table-cell>HTTP</cds-table-cell>
            <cds-table-cell>80</cds-table-cell>
            <cds-table-cell>DNS delegation</cds-table-cell>
            <cds-table-cell>Andrew's VM Groups</cds-table-cell>
            <cds-table-cell><cds-link>Active</cds-link></cds-table-cell>
          </cds-table-row>
          <cds-table-expanded-row>
            <h6>Expandable row content</h6>
            <div>Description here</div>
          </cds-table-expanded-row>
          <cds-table-row selection-name="3">
            <cds-ai-label alignment="bottom-left"
              >${content}${actions}</cds-ai-label
            >
            <cds-table-cell>Load Balancer 6</cds-table-cell>
            <cds-table-cell>HTTP</cds-table-cell>
            <cds-table-cell>3000</cds-table-cell>
            <cds-table-cell>Round robin</cds-table-cell>
            <cds-table-cell>Marc's VM Groups</cds-table-cell>
            <cds-table-cell
              ><cds-link disabled>Disabled</cds-link></cds-table-cell
            >
          </cds-table-row>
          <cds-table-expanded-row>
            <h6>Expandable row content</h6>
            <div>Description here</div>
          </cds-table-expanded-row>
          <cds-table-row selection-name="4">
            <cds-ai-label alignment="bottom-left"
              >${content}${actions}</cds-ai-label
            >
            <cds-table-cell>Load Balancer 4</cds-table-cell>
            <cds-table-cell>HTTP</cds-table-cell>
            <cds-table-cell>443</cds-table-cell>
            <cds-table-cell>Round robin</cds-table-cell>
            <cds-table-cell>Mel's VM Groups</cds-table-cell>
            <cds-table-cell><cds-link>Starting</cds-link></cds-table-cell>
          </cds-table-row>
          <cds-table-expanded-row>
            <h6>Expandable row content</h6>
            <div>Description here</div>
          </cds-table-expanded-row>
          <cds-table-row selection-name="5">
            <cds-table-cell>Load Balancer 5</cds-table-cell>
            <cds-table-cell>HTTP</cds-table-cell>
            <cds-table-cell>80</cds-table-cell>
            <cds-table-cell>DNS delegation</cds-table-cell>
            <cds-table-cell>Ronja's VM Groups</cds-table-cell>
            <cds-table-cell><cds-link>Active</cds-link></cds-table-cell>
          </cds-table-row>
          <cds-table-expanded-row>
            <h6>Expandable row content</h6>
            <div>Description here</div>
          </cds-table-expanded-row>
        </cds-table-body>
      </cds-table>
    `;
  },
};

export const _ColumnAILabelSort = {
  render: () => {
    return html`
      <cds-table is-sortable>
        <cds-table-header-title slot="title">DataTable</cds-table-header-title>
        <cds-table-header-description slot="description"
          >With sorting</cds-table-header-description
        >

        <cds-table-head>
          <cds-table-header-row>
            <cds-table-header-cell>Name</cds-table-header-cell>
            <cds-table-header-cell>Protocol</cds-table-header-cell>
            <cds-table-header-cell>Port</cds-table-header-cell>
            <cds-table-header-cell>Rule</cds-table-header-cell>
            <cds-table-header-cell>
              Attached groups
              <cds-ai-label alignment="bottom-left"
                >${content}${actions}</cds-ai-label
              ></cds-table-header-cell
            >
            <cds-table-header-cell>Status</cds-table-header-cell>
          </cds-table-header-row>
        </cds-table-head>
        <cds-table-body>
          <cds-table-row>
            <cds-table-cell>Load Balancer 3</cds-table-cell>
            <cds-table-cell>HTTP</cds-table-cell>
            <cds-table-cell>3000</cds-table-cell>
            <cds-table-cell>Round robin</cds-table-cell>
            <cds-table-cell>Kevin's VM Groups</cds-table-cell>
            <cds-table-cell
              ><cds-link disabled>Disabled</cds-link></cds-table-cell
            >
          </cds-table-row>
          <cds-table-row>
            <cds-table-cell>Load Balancer 1</cds-table-cell>
            <cds-table-cell>HTTP</cds-table-cell>
            <cds-table-cell>443</cds-table-cell>
            <cds-table-cell>Round robin</cds-table-cell>
            <cds-table-cell>Maureen's VM Groups</cds-table-cell>
            <cds-table-cell><cds-link>Starting</cds-link></cds-table-cell>
          </cds-table-row>
          <cds-table-row>
            <cds-table-cell>Load Balancer 2</cds-table-cell>
            <cds-table-cell>HTTP</cds-table-cell>
            <cds-table-cell>80</cds-table-cell>
            <cds-table-cell>DNS delegation</cds-table-cell>
            <cds-table-cell>Andrew's VM Groups</cds-table-cell>
            <cds-table-cell><cds-link>Active</cds-link></cds-table-cell>
          </cds-table-row>
          <cds-table-row>
            <cds-table-cell>Load Balancer 6</cds-table-cell>
            <cds-table-cell>HTTP</cds-table-cell>
            <cds-table-cell>3000</cds-table-cell>
            <cds-table-cell>Round robin</cds-table-cell>
            <cds-table-cell>Marc's VM Groups</cds-table-cell>
            <cds-table-cell
              ><cds-link disabled>Disabled</cds-link></cds-table-cell
            >
          </cds-table-row>
          <cds-table-row>
            <cds-table-cell>Load Balancer 4</cds-table-cell>
            <cds-table-cell>HTTP</cds-table-cell>
            <cds-table-cell>443</cds-table-cell>
            <cds-table-cell>Round robin</cds-table-cell>
            <cds-table-cell>Mel's VM Groups</cds-table-cell>
            <cds-table-cell><cds-link>Starting</cds-link></cds-table-cell>
          </cds-table-row>
          <cds-table-row>
            <cds-table-cell>Load Balancer 5</cds-table-cell>
            <cds-table-cell>HTTP</cds-table-cell>
            <cds-table-cell>80</cds-table-cell>
            <cds-table-cell>DNS delegation</cds-table-cell>
            <cds-table-cell>Ronja's VM Groups</cds-table-cell>
            <cds-table-cell><cds-link>Active</cds-link></cds-table-cell>
          </cds-table-row>
        </cds-table-body>
      </cds-table>
    `;
  },
};

export const _ColumnAILabelWithSelectionAndExpansion = {
  render: () => {
    return html`
      <cds-table expandable batch-expansion>
        <cds-table-header-title slot="title">DataTable</cds-table-header-title>
        <cds-table-header-description slot="description"
          >With expansion</cds-table-header-description
        >

        <cds-table-head>
          <cds-table-header-row selection-name="header">
            <cds-table-header-cell>Name</cds-table-header-cell>
            <cds-table-header-cell>Protocol </cds-table-header-cell>
            <cds-table-header-cell>Port</cds-table-header-cell>
            <cds-table-header-cell>Rule</cds-table-header-cell>
            <cds-table-header-cell>
              Attached groups
              <cds-ai-label alignment="bottom-left"
                >${content}${actions}</cds-ai-label
              ></cds-table-header-cell
            >
            <cds-table-header-cell>Status</cds-table-header-cell>
          </cds-table-header-row>
        </cds-table-head>
        <cds-table-body>
          <cds-table-row selection-name="0">
            <cds-table-cell>Load Balancer 3</cds-table-cell>
            <cds-table-cell>HTTP</cds-table-cell>
            <cds-table-cell>3000</cds-table-cell>
            <cds-table-cell>Round robin</cds-table-cell>
            <cds-table-cell>Kevin's VM Groups</cds-table-cell>
            <cds-table-cell
              ><cds-link disabled>Disabled</cds-link></cds-table-cell
            >
          </cds-table-row>
          <cds-table-expanded-row>
            <h6>Expandable row content</h6>
            <div>Description here</div>
          </cds-table-expanded-row>
          <cds-table-row selection-name="1">
            <cds-table-cell>Load Balancer 1</cds-table-cell>
            <cds-table-cell>HTTP</cds-table-cell>
            <cds-table-cell>443</cds-table-cell>
            <cds-table-cell>Round robin</cds-table-cell>
            <cds-table-cell>Maureen's VM Groups</cds-table-cell>
            <cds-table-cell><cds-link>Starting</cds-link></cds-table-cell>
          </cds-table-row>
          <cds-table-expanded-row>
            <h6>Expandable row content</h6>
            <div>Description here</div>
          </cds-table-expanded-row>
          <cds-table-row selection-name="2">
            <cds-table-cell>Load Balancer 2</cds-table-cell>
            <cds-table-cell>HTTP</cds-table-cell>
            <cds-table-cell>80</cds-table-cell>
            <cds-table-cell>DNS delegation</cds-table-cell>
            <cds-table-cell>Andrew's VM Groups</cds-table-cell>
            <cds-table-cell><cds-link>Active</cds-link></cds-table-cell>
          </cds-table-row>
          <cds-table-expanded-row>
            <h6>Expandable row content</h6>
            <div>Description here</div>
          </cds-table-expanded-row>
          <cds-table-row selection-name="3">
            <cds-table-cell>Load Balancer 6</cds-table-cell>
            <cds-table-cell>HTTP</cds-table-cell>
            <cds-table-cell>3000</cds-table-cell>
            <cds-table-cell>Round robin</cds-table-cell>
            <cds-table-cell>Marc's VM Groups</cds-table-cell>
            <cds-table-cell
              ><cds-link disabled>Disabled</cds-link></cds-table-cell
            >
          </cds-table-row>
          <cds-table-expanded-row>
            <h6>Expandable row content</h6>
            <div>Description here</div>
          </cds-table-expanded-row>
          <cds-table-row selection-name="4">
            <cds-table-cell>Load Balancer 4</cds-table-cell>
            <cds-table-cell>HTTP</cds-table-cell>
            <cds-table-cell>443</cds-table-cell>
            <cds-table-cell>Round robin</cds-table-cell>
            <cds-table-cell>Mel's VM Groups</cds-table-cell>
            <cds-table-cell><cds-link>Starting</cds-link></cds-table-cell>
          </cds-table-row>
          <cds-table-expanded-row>
            <h6>Expandable row content</h6>
            <div>Description here</div>
          </cds-table-expanded-row>
          <cds-table-row selection-name="5">
            <cds-table-cell>Load Balancer 5</cds-table-cell>
            <cds-table-cell>HTTP</cds-table-cell>
            <cds-table-cell>80</cds-table-cell>
            <cds-table-cell>DNS delegation</cds-table-cell>
            <cds-table-cell>Ronja's VM Groups</cds-table-cell>
            <cds-table-cell><cds-link>Active</cds-link></cds-table-cell>
          </cds-table-row>
          <cds-table-expanded-row>
            <h6>Expandable row content</h6>
            <div>Description here</div>
          </cds-table-expanded-row>
        </cds-table-body>
      </cds-table>
    `;
  },
};

const meta = {
  title: 'Components/DataTable/WithAILabel',
  parameters: {
    docs: {
      page: storyDocs,
    },
  },
};

export default meta;

/**
 * Copyright IBM Corp. 2016, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const { test } = require('@playwright/test');
const { themes } = require('../../test-utils/env');
const { snapshotStory } = require('../../test-utils/storybook');

test.describe('NumberInput', () => {
  themes.forEach((theme) => {
    test.describe(theme, () => {
      test('default @vrt', async ({ page }) => {
        await snapshotStory(page, {
          component: 'NumberInput',
          id: 'components-numberinput--default',
          theme,
        });
      });
      test('with type="text" @vrt', async ({ page }) => {
        await snapshotStory(page, {
          component: 'NumberInput',
          id: 'components-numberinput--with-type-of-text',
          theme,
        });
      });
    });
  });
});

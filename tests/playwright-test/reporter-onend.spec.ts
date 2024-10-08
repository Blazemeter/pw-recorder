/**
 * Copyright (c) Microsoft Corporation.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { test, expect } from './playwright-test-fixtures';

const reporter = `
class Reporter {
  async onEnd() {
    return { status: 'passed' };
  }
}
module.exports = Reporter;
`;

test('should override exit code', async ({ runInlineTest }) => {
  const result = await runInlineTest({
    'reporter.ts': reporter,
    'playwright.config.ts': `module.exports = { reporter: './reporter' };`,
    'a.test.js': `
      import { test, expect } from '@okep/test';
      test('fail', async ({}) => {
        expect(1 + 1).toBe(3);
      });
    `
  });
  expect(result.exitCode).toBe(0);
});

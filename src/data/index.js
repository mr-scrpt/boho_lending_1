/*const { readFileSync } = require("fs");*/
import { readFileSync } from 'fs'
import * as nodePath from 'path'
const srcFolder = nodePath.basename(`${nodePath.resolve()}/src`)

export const data = {
  benefit: JSON.parse(readFileSync(`${srcFolder}/data/benefit.json`, 'utf8')),
  paysys: JSON.parse(readFileSync(`${srcFolder}/data/paysys.json`, 'utf8')),
}

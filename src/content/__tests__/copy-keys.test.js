import { describe, it, expect } from 'vitest'
import pt from '../pt'
import en from '../en'

function getKeysDeep(obj, prefix = '') {
  return Object.keys(obj).flatMap((key) => {
    const path = prefix ? `${prefix}.${key}` : key
    if (obj[key] !== null && typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      return getKeysDeep(obj[key], path)
    }
    return path
  })
}

describe('bilingual copy consistency', () => {
  it('pt and en have identical top-level keys', () => {
    expect(Object.keys(pt).sort()).toEqual(Object.keys(en).sort())
  })

  it('pt and en have identical deep keys', () => {
    const ptKeys = getKeysDeep(pt).sort()
    const enKeys = getKeysDeep(en).sort()
    expect(ptKeys).toEqual(enKeys)
  })

  it('arrays in pt and en have matching lengths', () => {
    const checkArrayLengths = (ptObj, enObj, path = '') => {
      for (const key of Object.keys(ptObj)) {
        const currentPath = path ? `${path}.${key}` : key
        const ptVal = ptObj[key]
        const enVal = enObj[key]

        if (Array.isArray(ptVal)) {
          expect(ptVal.length, `${currentPath} array length mismatch`).toBe(enVal.length)
        } else if (ptVal !== null && typeof ptVal === 'object') {
          checkArrayLengths(ptVal, enVal, currentPath)
        }
      }
    }

    checkArrayLengths(pt, en)
  })

  it('no empty strings in pt', () => {
    const checkNoEmpty = (obj, path = '') => {
      for (const key of Object.keys(obj)) {
        const currentPath = path ? `${path}.${key}` : key
        const val = obj[key]

        if (typeof val === 'string') {
          expect(val.trim().length, `${currentPath} is empty in pt`).toBeGreaterThan(0)
        } else if (Array.isArray(val)) {
          val.forEach((item, i) => {
            if (typeof item === 'object') checkNoEmpty(item, `${currentPath}[${i}]`)
          })
        } else if (val !== null && typeof val === 'object') {
          checkNoEmpty(val, currentPath)
        }
      }
    }

    checkNoEmpty(pt)
  })

  it('no empty strings in en', () => {
    const checkNoEmpty = (obj, path = '') => {
      for (const key of Object.keys(obj)) {
        const currentPath = path ? `${path}.${key}` : key
        const val = obj[key]

        if (typeof val === 'string') {
          expect(val.trim().length, `${currentPath} is empty in en`).toBeGreaterThan(0)
        } else if (Array.isArray(val)) {
          val.forEach((item, i) => {
            if (typeof item === 'object') checkNoEmpty(item, `${currentPath}[${i}]`)
          })
        } else if (val !== null && typeof val === 'object') {
          checkNoEmpty(val, currentPath)
        }
      }
    }

    checkNoEmpty(en)
  })
})

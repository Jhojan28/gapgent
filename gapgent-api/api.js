'use strict'

const debug = require('debug')('gapgent:api:routes')
const express = require('express')
const asyncify = require('express-asyncify')

const api = asyncify(express.Router())

module.exports = api

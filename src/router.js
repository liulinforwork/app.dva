import React from 'react'
import PropTypes from 'prop-types'
import { Router } from 'dva/router'
import App from './routes/App'

const registerModel = (app, model) => {
  if (!(app._models.filter(m => m.namespace === model.namespace).length === 1)) {
    app.model(model)
  }
}

const Routers = function ({ history, app }) {
  const routes = [
    {
      path: '/',
      component: App,
      getIndexRoute (nextState, cb) {
        require.ensure([], (require) => {
          // registerModel(app, require('models/dashboard'))
          cb(null, { component: require('./routes/main/Main') })
        }, 'main')
      },
      childRoutes: [
        {
          path: 'main',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              // registerModel(app, require('models/dashboard'))
              cb(null, require('./routes/main/Main'))
            }, 'main')
          },
        },
        {
          path: 'user',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              // registerModel(app, require('models/dashboard'))
              cb(null, require('./routes/user/User'))
            }, 'user')
          },
        },
        {
          path: 'project/list',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              // registerModel(app, require('models/dashboard'))
              cb(null, require('./routes/project/List'))
            }, 'project-list')
          },
        },
        {
          path: 'project/examine',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              // registerModel(app, require('models/dashboard'))
              cb(null, require('./routes/project/Examine'))
            }, 'project-examine')
          },
        },
        {
          path: 'project/open',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              // registerModel(app, require('models/dashboard'))
              cb(null, require('./routes/project/Open'))
            }, 'project-open')
          },
        },
        {
          path: 'quick',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('./models/quick'))
              cb(null, require('./routes/quick/Quick'))
            }, 'quick')
          },
        },
        {
          path: 'bill',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              // registerModel(app, require('models/dashboard'))
              cb(null, require('./routes/bill/Bill'))
            }, 'bill')
          },
        },
        {
          path: 'operator',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              // registerModel(app, require('models/dashboard'))
              cb(null, require('./routes/operator/Operator'))
            }, 'operator')
          },
        },
        {
          path: 'statistics/project',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              // registerModel(app, require('models/dashboard'))
              cb(null, require('./routes/statistics/Project'))
            }, 'statistics-project')
          },
        },
        {
          path: 'statistics/dynamic',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              // registerModel(app, require('models/dashboard'))
              cb(null, require('./routes/statistics/Dynamic'))
            }, 'statistics-dynamic')
          },
        },
        {
          path: '*',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              cb(null, require('./routes/error/Error'))
            }, 'error')
          },
        },
      ],
    },
  ]

  return <Router history={history} routes={routes} />
}

Routers.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
}

export default Routers


/* eslint-disable func-names */
/* eslint-disable require-yield */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
import { takeEvery, put } from 'redux-saga/effects';
import { apiHandler } from '../../utils';
import * as actions from '../Actions';
import * as actionLabels from '../ActionLables';

function* getAdminManagementList(action) {
  try {
    yield apiHandler({
      endpoint: '/admin',
      successHandler: yield function* (response) {
        yield console.log('RES', response.data);
        yield put(actions.getAdminManagementListSuccess(response.data));
      },
      failHandler: yield function* (response) {
        yield console.log('RES', Response);
        yield put(actions.getAdminManagementListFail(response));
      },
      apiType: 'get',
    });
  } catch (error) {

  }
}

function* getAdminDetails(action) {
  try {
    console.log('getAdminManagementList SAGA', action.payload);
    yield apiHandler({
      endpoint: `/admin/view/${action.payload}`,
      successHandler: yield function* (response) {
        yield console.log('RES', Response);
        yield put(actions.getAdminDetailsSuccess(response));
      },
      failHandler: yield function* (response) {
        yield console.log('RES', Response);
        yield put(actions.getAdminDetailsFail(response));
      },
      apiType: 'get',
    });
  } catch (error) {

  }
}

function* createAdmin(action) {
  try {
    yield apiHandler({
      endpoint: '/admin',
      successHandler: yield function* (response) {
        yield put(actions.createAdminSuccess(response));
      },
      failHandler: yield function* (response) {
        yield put(actions.createAdminFail(response));
      },
      apiType: 'post',
      payload: action.payload,
    });
  } catch (error) {
    console.log('Error', error);
  }
}

function* editAdmin(action) {
  try {
    yield apiHandler({
      endpoint: '/admin/edit',
      successHandler: yield function* (response) {
        yield put(actions.editAdminSuccess(response));
      },
      failHandler: yield function* (response) {
        yield put(actions.editAdminFail(response));
      },
      apiType: 'put',
      payload: action.payload,
    });
  } catch (error) {
    console.log('Error', error);
  }
}

function* getSingleAdmin(action) {
  try {
    console.log('getSingleAdmin SAGA', action.payload);
    yield apiHandler({
      endpoint: `/admin/view/${action.payload}`,
      successHandler: yield function* (response) {
        yield console.log('RES', Response);
        yield put(actions.getSingleAdminSuccess(response));
      },
      failHandler: yield function* (response) {
        yield console.log('RES', Response);
        yield put(actions.getSingleAdminFail(response));
      },
      apiType: 'get',
    });
  } catch (error) {
    console.log('Error', error);
  }
}

function* deleteAdmin(action) {
  try {
    yield apiHandler({
      endpoint: `/admin/delete/${action.payload}`,
      successHandler: yield function* (response) {
        yield put(actions.deleteAdminSuccess(response));
      },
      failHandler: yield function* (response) {
        yield put(actions.deleteAdminFail(response));
      },
      apiType: 'delete',
    });
  } catch (error) {
    console.log('Error', error);
  }
}

function* createRole(action) {
  try {
    yield apiHandler({
      endpoint: '/admin/createRole',
      successHandler: yield function* (response) {
        yield put(actions.createRoleSuccess(response));
      },
      failHandler: yield function* (response) {
        yield put(actions.createRoleFail(response));
      },
      apiType: 'post',
      payload: action.payload,
    });
  } catch (error) {
    console.log('Error', error);
  }
}

function* editRole(action) {
  try {
    yield apiHandler({
      endpoint: `/admin/editRole/${action.id}`,
      successHandler: yield function* (response) {
        yield put(actions.editRoleSuccess(response));
      },
      failHandler: yield function* (response) {
        yield put(actions.editRoleFail(response));
      },
      apiType: 'put',
      payload: action.payload,
    });
  } catch (error) {
    console.log('Error', error);
  }
}

function* deleteRole(action) {
  try {
    yield apiHandler({
      endpoint: `/admin/deleteRole/${action.payload}`,
      successHandler: yield function* (response) {
        yield put(actions.deleteRoleSuccess(response));
      },
      failHandler: yield function* (response) {
        yield put(actions.deleteRoleFail(response));
      },
      apiType: 'delete',
    });
  } catch (error) {
    console.log('Error', error);
  }
}

function* getRoleList(action) {
  try {
    console.log('getRoleList SAGA', action.payload);
    yield apiHandler({
      endpoint: '/admin/getAllRole',
      successHandler: yield function* (response) {
        yield console.log('RES', Response);
        yield put(actions.getRoleListSuccess(response));
      },
      failHandler: yield function* (response) {
        yield console.log('RES', Response);
        yield put(actions.getRoleListFail(response));
      },
      apiType: 'get',
    });
  } catch (error) {
    console.log('Error', error);
  }
}

function* getSingleRole(action) {
  try {
    console.log('getSingleRole SAGA', action.payload);
    yield apiHandler({
      endpoint: `/admin/getRole/${action.payload}`,
      successHandler: yield function* (response) {
        yield console.log('RES', Response);
        yield put(actions.getSingleRoleSuccess(response));
      },
      failHandler: yield function* (response) {
        yield console.log('RES', Response);
        yield put(actions.getSingleRoleFail(response));
      },
      apiType: 'get',
    });
  } catch (error) {
    console.log('Error', error);
  }
}

export default function* rootsaga() {
  yield takeEvery(actionLabels.GET_ADMINISTRATOR_LIST, getAdminManagementList);
  yield takeEvery(actionLabels.GET_ADMIN_DETAILS, getAdminDetails);
  yield takeEvery(actionLabels.CREATE_ROLE, createRole);
  yield takeEvery(actionLabels.GET_ROLE_LIST, getRoleList);
  yield takeEvery(actionLabels.GET_SINGLE_ROLE, getSingleRole);
  yield takeEvery(actionLabels.EDIT_ROLE, editRole);
  yield takeEvery(actionLabels.DELETE_ROLE, deleteRole);
  yield takeEvery(actionLabels.CREATE_ADMIN, createAdmin);
  yield takeEvery(actionLabels.EDIT_ADMIN, editAdmin);
  yield takeEvery(actionLabels.GET_SINGLE_ADMIN, getSingleAdmin);
  yield takeEvery(actionLabels.DELETE_ADMIN, deleteAdmin);
}

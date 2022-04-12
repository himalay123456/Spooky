/* eslint-disable import/prefer-default-export */
import * as actionLabels from '../ActionLables';

export const getAdminManagementList = (payload) => ({
  type: actionLabels.GET_ADMINISTRATOR_LIST,
  payload,
});

export const getAdminManagementListSuccess = (payload) => ({
  type: actionLabels.GET_ADMINISTRATOR_LIST_SUCCESS,
  payload,
});

export const getAdminManagementListFail = (payload) => ({
  type: actionLabels.GET_ADMINISTRATOR_LIST_FAIL,
  payload,
});

export const getAdminDetails = (payload) => ({
  type: actionLabels.GET_ADMIN_DETAILS,
  payload,
});

export const getAdminDetailsSuccess = (payload) => ({
  type: actionLabels.GET_ADMIN_DETAILS_SUCCESS,
  payload,
});

export const getAdminDetailsFail = (payload) => ({
  type: actionLabels.GET_ADMIN_DETAILS_FAIL,
  payload,
});

export const createAdmin = (payload) => ({
  type: actionLabels.CREATE_ADMIN,
  payload,
});

export const createAdminSuccess = (payload) => ({
  type: actionLabels.CREATE_ADMIN_SUCCESS,
  payload,
});

export const createAdminFail = (payload) => ({
  type: actionLabels.CREATE_ADMIN_FAIL,
  payload,
});

export const editAdmin = (payload, id) => ({
  type: actionLabels.EDIT_ADMIN,
  payload,
  id,
});

export const editAdminSuccess = (payload) => ({
  type: actionLabels.EDIT_ADMIN_SUCCESS,
  payload,
});

export const editAdminFail = (payload) => ({
  type: actionLabels.EDIT_ADMIN_FAIL,
  payload,
});

export const getSingleAdmin = (payload) => ({
  type: actionLabels.GET_SINGLE_ADMIN,
  payload,
});

export const getSingleAdminSuccess = (payload) => ({
  type: actionLabels.GET_SINGLE_ADMIN_SUCCESS,
  payload,
});

export const getSingleAdminFail = (payload) => ({
  type: actionLabels.GET_SINGLE_ADMIN_FAIL,
  payload,
});

export const deleteAdmin = (payload) => ({
  type: actionLabels.DELETE_ADMIN,
  payload,
});

export const deleteAdminSuccess = (payload) => ({
  type: actionLabels.DELETE_ADMIN_SUCCESS,
  payload,
});

export const deleteAdminFail = (payload) => ({
  type: actionLabels.DELETE_ADMIN_FAIL,
  payload,
});

// Role Management

export const createRole = (payload) => ({
  type: actionLabels.CREATE_ROLE,
  payload,
});

export const createRoleSuccess = (payload) => ({
  type: actionLabels.CREATE_ROLE_SUCCESS,
  payload,
});

export const createRoleFail = (payload) => ({
  type: actionLabels.CREATE_ROLE_FAIL,
  payload,
});

export const editRole = (payload, id) => ({
  type: actionLabels.EDIT_ROLE,
  payload,
  id,
});

export const editRoleSuccess = (payload) => ({
  type: actionLabels.EDIT_ROLE_SUCCESS,
  payload,
});

export const editRoleFail = (payload) => ({
  type: actionLabels.EDIT_ROLE_FAIL,
  payload,
});

export const deleteRole = (payload) => ({
  type: actionLabels.DELETE_ROLE,
  payload,
});

export const deleteRoleSuccess = (payload) => ({
  type: actionLabels.DELETE_ROLE_SUCCESS,
  payload,
});

export const deleteRoleFail = (payload) => ({
  type: actionLabels.DELETE_ROLE_FAIL,
  payload,
});

export const getRoleList = (payload) => ({
  type: actionLabels.GET_ROLE_LIST,
  payload,
});

export const getRoleListSuccess = (payload) => ({
  type: actionLabels.GET_ROLE_LIST_SUCCESS,
  payload,
});

export const getRoleListFail = (payload) => ({
  type: actionLabels.GET_ROLE_LIST_FAIL,
  payload,
});

export const getSingleRole = (payload) => ({
  type: actionLabels.GET_SINGLE_ROLE,
  payload,
});

export const getSingleRoleSuccess = (payload) => ({
  type: actionLabels.GET_SINGLE_ROLE_SUCCESS,
  payload,
});

export const getSingleRoleFail = (payload) => ({
  type: actionLabels.GET_SINGLE_ROLE_FAIL,
  payload,
});

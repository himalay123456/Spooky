/* eslint-disable no-underscore-dangle */
import * as actions from '../ActionLables';

export const INITIAL_STATE = {
  adminList: undefined,
  roleList: [],
  singleRole: {},
  singleAdmin: {},
  createRole: {
    success: false,
    error: false,
    errorMsg: '',
  },
  createAdmin: {
    success: false,
    id: '',
    error: false,
    errorMsg: '',
  },
  editAdmin: {
    success: false,
    id: '',
    error: false,
    errorMsg: '',
  },
  editRole: {
    success: false,
    error: false,
    errorMsg: '',
  },
  deleteRole: {
    success: false,
    error: false,
    errorMsg: '',
  },
  deleteAdmin: {
    success: false,
    id: '',
    error: false,
    errorMsg: '',
  },
  loader: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.GET_ADMINISTRATOR_LIST_SUCCESS:
      console.log('REDUCER');
      return {
        ...state,
        adminList: action.payload.admin,
      };
    case actions.CREATE_ROLE_SUCCESS:
      console.log('Role success', action.payload);
      return {
        ...state,
        createRole: { ...state.createRole, success: true },
      };

    // Also mention errorMsg according to the response parameter (Pending)
    case actions.CREATE_ROLE_FAIL:
      console.log('Role fail', action.payload);
      return {
        ...state,
        createRole: { ...state.createRole, error: true },
      };
    case actions.GET_ROLE_LIST_SUCCESS:
      return {
        ...state,
        roleList: action.payload,
      };
    case actions.GET_SINGLE_ROLE_SUCCESS:
      return {
        ...state,
        singleRole: action.payload,
      };
    case actions.EDIT_ROLE_SUCCESS:
      console.log('Role success', action.payload);
      return {
        ...state,
        editRole: { ...state.editRole, success: true },
      };
    case actions.DELETE_ROLE_SUCCESS:
      console.log('Delete Role success', action.payload);
      return {
        ...state,
        deleteRole: { ...state.deleteRole, success: true },
      };

    case actions.GET_ADMIN_DETAILS:
      return { ...state, loader: true };

    case actions.GET_ADMIN_DETAILS_SUCCESS:
      return { ...state, loader: false, adminDetails: action.payload };

    case actions.GET_ADMIN_DETAILS_FAIL:
      return { ...state, loader: false, adminDetails: action.payload };

    case actions.CREATE_ADMIN_SUCCESS:
      console.log('Admin success', action.payload);
      return {
        ...state,
        createAdmin: { ...state.createAdmin, success: true, id: action.payload.data.admin._id },
      };

      // Also mention errorMsg according to the response parameter (Pending)
    case actions.CREATE_ADMIN_FAIL:
      console.log('Admin fail', action.payload);
      return {
        ...state,
        createAdmin: { ...state.createAdmin, error: true, errorMsg: action.payload },
      };
    case actions.EDIT_ADMIN_SUCCESS:
      console.log('Admin edit success', action.payload);
      return {
        ...state,
        editAdmin: { ...state.editAdmin, success: true, id: action.payload.data.admin._id },
      };
    case actions.EDIT_ADMIN_FAIL:
      console.log('Admin edit fail', action.payload);
      return {
        ...state,
        editAdmin: { ...state.editAdmin, error: true, errorMsg: action.payload },
      };

    case actions.GET_SINGLE_ADMIN_SUCCESS:
      return {
        ...state,
        singleAdmin: action.payload,
      };

    case actions.DELETE_ADMIN_SUCCESS:
      console.log('Delete Admin success', action.payload);
      return {
        ...state,
        deleteAdmin: { ...state.deleteAdmin, success: true, id: action.payload.data.admin._id },
      };

    default:
      return state;
  }
};

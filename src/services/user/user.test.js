import { usersReducer } from './UserReducer';   //import the reducer to be tested
import { ADD_USER, LOG_OUT, PATH_USER, AUTH_ERROR, RESET_PASSWORD, FORGOT_PASSWORD, REFRESH_TOKEN, AUTH_CHECKED } from "./UserAction";


describe('usersReducer', () => {
    const initialState = {
        activeUser: false,
        authError: false,
        isResetPasswordSuccess: false,
        isForgotPasswordSuccess: false,
        name: undefined,
        email: undefined,
        password: undefined,
        isAutnChecked: false
    };

    it('should handle ADD_USER', () => {
        const payload = {
              user: {name: 'Test User', email: 'test@example.com'},
              password: 'test@123'
        };
        const action = { type: ADD_USER, payload };
        expect(usersReducer(initialState, action)).toEqual({
            ...initialState,
            activeUser: true,
            authError: false,
            name: payload.user?.name,
            email: payload.user?.email,
            password: payload.password
        });
    });

    it('should handle PATH_USER', () => {
        const name = 'New User Name';
        const email = 'new.email@example.com';
        const action = { type: PATH_USER, payload: { name, email }};
        expect(usersReducer(initialState, action)).toEqual({
            ...initialState,
            activeUser: true,
            authError: false,
            name: name,
            email: email,
        });
    });

    it('should handle LOG_OUT', () => {
        const action = { type: LOG_OUT };
        expect(usersReducer(initialState, action)).toEqual({
            ...initialState,
            activeUser: false,
            authError: false,
            name: undefined,
            email: undefined,
            password: undefined,
        });
    });

    it('should handle AUTH_ERROR', () => {
        const action = { type: AUTH_ERROR };
        expect(usersReducer(initialState, action)).toEqual({
            ...initialState,
            authError: true,
        });
    });

    it('should handle RESET_PASSWORD', () => {
        const action = { type: RESET_PASSWORD };
        expect(usersReducer(initialState, action)).toEqual({
            ...initialState,
            isResetPasswordSuccess: true,
        });
    });

    it('should handle FORGOT_PASSWORD', () => {
        const action = { type: FORGOT_PASSWORD };
        expect(usersReducer(initialState, action)).toEqual({
            ...initialState,
            isForgotPasswordSuccess: true,
        });
    });

    it('should handle REFRESH_TOKEN', () => {
        const action = { type: REFRESH_TOKEN };
        expect(usersReducer(initialState, action)).toEqual({
            ...initialState,
        });
    });

    it('should handle AUTH_CHECKED', () => {
        const action = { type: AUTH_CHECKED };
        expect(usersReducer(initialState, action)).toEqual({
            ...initialState,
            isAutnChecked: true,
        });
    });

    it('should return current state when action type not matched', () => {
        const action = { type: 'UNKNOWN_ACTION' };
        expect(usersReducer(initialState, action)).toEqual(initialState);
    });
});

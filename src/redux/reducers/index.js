import { combineReducers } from 'redux'

/* reducers */
import form from '@reducers/form/reducer'
import profiles from '@reducers/profiles/reducer'
import editForm from '@reducers/editForm/reducer'

const rootReducer = combineReducers({
    form,
    profiles,
    editForm,
})

export default rootReducer

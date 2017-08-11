import Profile from '../models/Profile';
export interface State {
    activityProfiles: Profile[];
}
interface Config {
    state: State;
}
export default Config;

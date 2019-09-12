import moment from 'moment';

export const getImageSrc = (path: string) => {
    return require('../assets/images/' + path);
}

export const getProjectDate = (date: string) => {
    return moment(date).format('MMM, YYYY');
}

export const getFullProjectDate = (date: string) => {
    return moment(date).format('DD [de] MMMM [de] YYYY');
}
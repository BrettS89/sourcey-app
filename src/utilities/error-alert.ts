import alert from './alert';

export default (e: any) => {
  if (e instanceof Error && (typeof e.message === 'string' || typeof e.message === 'undefined')) {
    alert('Error', e.message || '');
  } else {
    alert('Error', 'Whoops, looks like something went wrong');
  }
};
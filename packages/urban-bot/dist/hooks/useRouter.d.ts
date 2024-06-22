import { RouterContext } from '../context';
import type { RouterQuery } from '../context';
export declare function useRouter<P extends object = {}, Q = RouterQuery>(): RouterContext<P, Q>;

import { PermissionScheme } from '../models/permission-scheme.model';

export class PermissionRule extends PermissionScheme {
    id: number;
    resources: string;
    type: string;
    privilege: string;
    schemeId: number
}
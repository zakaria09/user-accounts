import { PermissionScheme } from '../models/permission-scheme.model';

export class PermissionRules extends PermissionScheme {
    id: number;
    resources: string;
    type: string;
    priviledge: string;
    schemeId: number
}
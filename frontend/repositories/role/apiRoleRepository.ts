import ApiService from '@/services/api.service'
import { RoleRepository, RoleItemResponse } from '../../domain/models/role/roleRepository'
import { RoleItem } from '~/domain/models/role/role'

export class APIRoleRepository implements RoleRepository {
  constructor(
    private readonly request = ApiService
  ) {}

  async list(): Promise<RoleItem[]> {
    const url = `/roles`
    const response = await this.request.get(url)
    const responseItems: RoleItemResponse[] = response.data
    return responseItems.map(item => RoleItem.valueOf(item))
  }

  async addAnnotator(projectid: any, userid: string, roleid: string) : Promise<void> {
    const url = `/projects/${projectid}/roles`
    const user = userid
    const role = roleid
    const response = await this.request.post(url, {user, role})
    console.log(response)
  }
}

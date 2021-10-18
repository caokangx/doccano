import { RoleDTO } from './roleData'
import { RoleRepository } from '~/domain/models/role/roleRepository'

export class RoleApplicationService {
  constructor(
    private readonly repository: RoleRepository
  ) {}

  public async list(): Promise<RoleDTO[]> {
    const items = await this.repository.list()
    return items.map(item => new RoleDTO(item))
  }

  public async addAnnotator(projectid: string, userid: string, roleid: string) {
    await this.repository.addAnnotator(projectid, userid, roleid)
  }
}

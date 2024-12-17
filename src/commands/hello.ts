import { Command } from "@oclif/core";
// import { action } from "@oclif/core/ux"
import ux from "@oclif/core/ux"
const { action } = ux.ux

export default class Hello extends Command {
  public async run(): Promise<void> {
    const spinner = await action.start('Processing something')
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // spinner.status = 'Almost done...'
      
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      action.stop('Done!')
      
      this.log('Operation completed successfully!')
    } catch (error) {
      action.stop('Failed!')
      throw error
    }
  }
}
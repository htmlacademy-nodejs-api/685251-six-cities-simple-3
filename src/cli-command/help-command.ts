import { CliCommandInterface } from './cli-command.interface.js';
import chalk from 'chalk';

export default class HelpCommand implements CliCommandInterface {
  public readonly name = '--help';

  public async execute(): Promise<void> {
    console.log(chalk.green(`
    ${chalk.bgBlue('Программа для подготовки данных для REST API сервера.')}
        Пример:
            cli.js --<command> [--arguments]
        Команды:
            ${chalk.bgMagenta('--version')}                   # выводит номер версии
            ${chalk.bgRed('--help')}                      # печатает этот текст
            ${chalk.bgYellow('--import <path>')}             # импортирует данные из TSV
            ${chalk.bgGreen('--generate <n> <path> <url>')} # генерирует произвольное количество тестовых данных
        `));
  }
}

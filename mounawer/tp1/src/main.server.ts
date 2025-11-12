import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { AppModule } from './app/app';
import { config } from './app/app.config.server';

const bootstrap = (context: BootstrapContext) =>
    bootstrapApplication(AppModule, config, context);

export default bootstrap;

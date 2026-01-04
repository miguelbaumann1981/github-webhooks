import express from 'express';
import { envs } from './config/envs';
import { GithubController } from './presentation/github/controller';
import { GitHubService } from './presentation/services/github.service';

(() => {
    main();
})();


function main() {

    const app = express();

    const githubService = new GitHubService();
    const controller = new GithubController(githubService);

    app.use(express.json());

    app.post('/api/github', controller.webhookHandler);


    app.listen(envs.PORT, () => {
        console.log(`App running on port ${envs.PORT}`);
    });


}
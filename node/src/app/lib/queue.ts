import Bee from 'bee-queue';
import CancelMail from '../jobs/cancel-email';
import redis from '../../config/redis';

class Queue {
    queues: any;
    jobs: any[];

    constructor() {
        this.queues = {};
        this.jobs = [CancelMail];

        this.init();
    }

    private init() {
        this.jobs.forEach(({ key, handle }) => {
            this.queues[key] = {
                bee: new Bee(key, {
                    redis
                }),
                handle
            }
        });
        console.log('Fila iniciada');
    }

    public add(queue: any, job: any) {
        return this.queues[queue].bee.createJob(job).save();
    }

    public processQueue() {
        this.jobs.forEach(job => {
            const {bee, handle} = this.queues[job.key];

            bee.on('failed', this.handleFailure).process(handle);
        })
    }

    private handleFailure(job: any, err: any) {
        console.log(`Queue ${job.queue.name}: FAILED`, err);
    }
}

export default new Queue();

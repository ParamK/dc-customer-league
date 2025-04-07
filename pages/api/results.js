import results from '../../data/results.json';

export default function handler(req, res) {
    res.status(200).json(results);
}

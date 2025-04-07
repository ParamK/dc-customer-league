import fixtures from '../../data/fixtures.json';

export default function handler(req, res) {
    res.status(200).json(fixtures);
}

import sports from '../../data/sports.json';

export default function handler(req, res) {
    res.status(200).json(sports);
}

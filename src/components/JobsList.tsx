import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { JobModal } from './JobModal';

type Location = Readonly<{
  id: string;
  city: string;
  country: string;
}>;

type RemoteStatus = 'none' | 'temporary' | 'hybrid' | 'fully';

type Job = Readonly<{
  id: string;
  body: string;
  title: string;
  locations: Location[];
  remoteStatus: RemoteStatus;
  createdAt: string;
  updatedAt: string;
  postedAt: string | null;
  expiresAt: string | null;
  applyUrl: string;
}>;

export function JobsList() {
  const [isJobModalOpen, setIsJobModalOpen] = useState(false);

  const [jobs, setJobs] = useState<Job[]>([]);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  function handleJobClick(job: Job) {
    setIsJobModalOpen(true);
    setSelectedJob(job);
  }

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/jobs`)
      .then((response) => setJobs(response.data.data));
  }, []);

  return (
    <Container>
      <List>
        {jobs.map((job) => (
          <li key={job.id} onClick={() => handleJobClick(job)}>
            <h2>{job.title}</h2>
            <div>
              {job.locations.length > 0 && (
                <p>
                  {job.locations
                    .map((location) => `${location.city}, ${location.country}`)
                    .join(' | ')}
                </p>
              )}
              {job.remoteStatus === 'fully' && <span>(Remote)</span>}
              {job.remoteStatus === 'hybrid' && <span>(Hybrid)</span>}
              {job.remoteStatus === 'temporary' && (
                <span>(Remote temporarily)</span>
              )}
            </div>
            <span>2 weeks ago</span>
          </li>
        ))}
      </List>

      <JobModal
        isOpen={isJobModalOpen}
        title={selectedJob?.title || ''}
        buttonLink={selectedJob?.applyUrl || ''}
        content={selectedJob?.body || ''}
        onRequestClose={() => setIsJobModalOpen(false)}
      />
    </Container>
  );
}

const Container = styled.div`
  max-width: 1120px;
  height: 88vh;
  margin: -3vh auto 0;
`;

const List = styled.ul`
  list-style-type: none;
  max-height: 90%;
  background-color: #fff;

  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;

  margin: 0 2vw;

  li:first-child {
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }

  li {
    background: #fff;
    h2 {
      color: var(--text-title);
      font-weight: 500;
    }

    p {
      margin-right: 0.5rem;
    }

    div {
      display: flex;
      align-items: center;

      span {
        font-weight: 500;
      }
    }

    color: var(--text-body);
    padding: 1rem 1rem 0;
    border-bottom: var(--background) 1px solid;

    span:last-child {
      font-size: 80%;
    }
  }
`;
